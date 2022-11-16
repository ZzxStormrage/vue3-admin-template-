/*
 * @Author: zzx 452436275@qq.com
 * @Date: 2022-10-21 12:20:59
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2022-11-16 18:01:47
 * @FilePath: /vue3-admin-template-/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'

import '@/styles/index.scss' // global css

// 引入路由
import router from './router'

// 完整引入Element
import ElementPlus from 'element-plus'

const app = createApp(App)

app.use(router).use(ElementPlus, { size: 'small', zIndex: 3000 }).mount('#app')
