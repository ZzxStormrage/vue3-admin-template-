/*
 * @Author: zzx 452436275@qq.com
 * @Date: 2022-10-21 12:20:59
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2022-10-21 17:53:12
 * @FilePath: /vue3-app/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 引入路由
import router from './router'

const app = createApp(App)

app.use(router).mount('#app')

