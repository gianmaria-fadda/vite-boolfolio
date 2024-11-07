import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/HomePage.vue';
import HowIAm from './pages/AboutPage.vue';
import ProjectPage from './pages/ProjectPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/chi-siamo',
            name: 'chi-siamo',
            component: HowIAm
        },
        {
            path: '/project',
            name: 'projects-index',
            component: ProjectPage
        }
    ]
});

export { router };