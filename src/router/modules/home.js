/*
 * @Author: zzx 452436275@qq.com
 * @Date: 2022-10-21 16:29:48
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2022-10-24 16:12:09
 * @FilePath: /vue3-app/src/router/modules/home.js
 * @Description: 这是默认设置,请设置`customMade`,
 * 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// home.js
import Layout from '@/layout/index.vue'

export default [
  {
    path: '/home',
    component: Layout,
    meta: {
      title: 'menu.dashboard',
    },
    icon: 'icon-home',
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: 'menu.homepage',
          affix: true,
        },
      },
    ],
  },
]
