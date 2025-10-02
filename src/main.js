import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { i18n } from './i18n';
import { defineRule, configure } from 'vee-validate';
import { localize } from '@vee-validate/i18n';
import ja from '@vee-validate/i18n/dist/locale/ja.json';
import { all } from '@vee-validate/rules';
import { setLocale } from 'yup';

const { t } = i18n.global;

setLocale({
    mixed: {
        default: '不正な値です。',
        required: ({ path }) => t('validation.required', { field: t(`field.${path}`) }),
    },
    string: {
        email: ({ label }) => `${label}の形式ではありません。`,
    },
});

Object.entries(all).forEach(([name, rule]) => {
    defineRule(name, rule);
});

configure({
    generateMessage: localize({
        ja,
    }),
});

localize('ja');

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(i18n);
app.mount('#app');