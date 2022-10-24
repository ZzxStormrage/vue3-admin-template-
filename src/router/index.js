/*
 * @Author: zzx 452436275@qq.com
 * @Date: 2022-10-21 16:27:37
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2022-10-21 17:23:56
 * @FilePath: /vue3-app/src/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHea
 * der查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'

/* 菜单栏的路由 */
import home from './modules/home'

// 固定菜单
export const fixedRoutes = [...home]
// 动态菜单
export const asyncRoutes = []

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        ...fixedRoutes,
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } 
        return { left: 0, top: 0 }
    },
})

export default router