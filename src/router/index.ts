import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'counter-one',
            component: () => import('@/counter/pages/CounterOne.vue')
        },
        {
            path: '/counter-two',
            name: 'counter-two',
            component: () => import('@/counter/pages/CounterTwo.vue')
        },
        {
            path: '/clients',
            name: 'clients',
            component: () => import('@/clients/layouts/ClientsLayout.vue'),
            children: [
                {
                    path: '',
                    name: 'clients-list',
                    component: () => import('@/clients/pages/ClientsList.vue')
                },
                {
                    path: '/clients/:id',
                    name: 'client-details',
                    component: () => import('@/clients/pages/ClientDetails.vue')
                },
            ]
        },
    ]
})

export default router
