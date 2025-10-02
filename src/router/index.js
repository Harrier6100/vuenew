import { createRouter, createWebHistory } from 'vue-router';
import generatedRoutes from 'virtual:generated-pages';

const routes = generatedRoutes.map(route => ({
    ...route,
}));

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;