/**
 * @Author AIguibin
 * @Datetime 2023/1/23 15:20
 * @Description TODO
 */
import { createRouter, createWebHistory } from 'vue-router';
import baseRouter from './modules/baseRouter'


const routeArray = [
    ...baseRouter
];
const router = createRouter({
    history: createWebHistory(),
    routes: routeArray,
});
let UserAuthorization = localStorage.getItem("UserAuthorization");
// 全局导航守卫
// 验证是否登陆或登录过期
router.beforeEach((to, from, next) => {
    if (to.name !== 'LoginView' && !UserAuthorization) next({ name: 'LoginView' });
    else next()
});
export default router;