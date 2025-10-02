<template>
    <div class="container">
        <h6>Users</h6>
        <form @submit.prevent="onSubmit" autocomplete="off">
            <div class="row mb-3">
                <label class="col-3 col-form-label" for="userId">{{ t('field.userId') }}</label>
                <div class="col-9">
                    <input type="text" class="form-control" id="userId" v-model="userId">
                    <p>{{ errors.userId }}</p>
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-3 col-form-label" for="name">Name</label>
                <div class="col-9">
                    <input type="text" class="form-control" id="name" v-model="name" v-bind="nameProps">
                    <p>{{ errors.name }}</p>
                </div>
            </div>
            {{ t('field.userId') }}
            <input type="checkbox" v-model="isActive" value="A">
            <input type="checkbox" v-model="isActive" value="B">
            <input type="checkbox" v-model="isActive" value="C">
            <pre>valid:{{ meta.valid }}</pre>
            <pre>dirty:{{ meta.dirty }}</pre>
            <pre>initialValues:{{ meta.initialValues }}</pre>
            <p>{{ errors['isActive'] }}</p>
            <button :disabled="!meta.valid || isSubmitting">保存</button>
        </form>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const { t } = useI18n();

const schema = yup.object({
    userId: yup.string().required(),
    name: yup.string().required(),
    isActive: yup.array(yup.string().required()).min(1),
});

const user = ref({
    userId: '',
    name: '',
    isActive: [],
});

const { errors, defineField, meta, handleSubmit, isSubmitting } = useForm({
    validationSchema: schema,
    initialValues: user.value,
});

const [userId, userIdProps] = defineField('userId');
const [name, nameProps] = defineField('name', {
    validateOnModelUpdate: false,
});
const [isActive, isActiveProps] = defineField('isActive');

const route = useRoute();

const isUpdateMode = computed(() => {
    return !!route.params.id;
});

const onSubmit = handleSubmit(async (values, { resetForm }) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(values);
    resetForm();
});
</script>