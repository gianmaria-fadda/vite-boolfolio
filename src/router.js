import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/HomePage.vue';
//import ProjectList from './pages/ProjectList.vue';
//import HowIAm from './pages/HowIAm.vue';

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        //{
        //    path: '/chi siamo',
        //    name: 'chi siamo',
        //    component: HowIAm
        //},
        //{
        //    path: '/',
        //    name: 'home',
        //    component: ProjectList
        //}
    ]
});

export { router };