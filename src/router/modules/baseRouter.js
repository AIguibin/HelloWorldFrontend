/**
 * @Author AIguibin
 * @Datetime 2023/1/23 15:20
 * @Description TODO
 */
export default [
    {
        path: '/',
        name: 'HomeView',
        component: () => import('@/pages/HomeView.vue')
    },
    {
        path: '/login',
        name: 'LoginView',
        component: () => import('@/pages/LoginView.vue')
    },
];