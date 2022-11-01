<!--
 * @Date: 2022-10-28 17:17:16
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2022-11-01 11:16:22
 * @FilePath: /vue3-app/src/layout/components/Sidebar/index.vue
-->
<template>
  <div>
    <el-menu
      defaultActive="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">

      <SidebarItem
        v-for="route in routers"
        :key="route.path"
        :item="route"
        :basePath="route.path" />

    </el-menu>
  </div>
</template>

<script setup>
import SidebarItem from './SidebarItem.vue'

const routers = [
  {
    path: '/home',
    meta: {
      title: '首页',
    },
    icon: 'icon-home',
    children: [
      {
        path: '',
        name: 'home',
        meta: {
          title: '首页',
          affix: true,
        },
      },
    ],
  },
  {
    path: '/home',
    meta: {
      title: '菜单一',
    },
    icon: 'icon-home',
    children: [
      {
        path: '',
        name: 'home',
        meta: {
          title: '子菜单1',
          affix: true,
        },
        children: [
          {
            path: '',
            name: 'home',
            meta: {
              title: '子菜单1',
              affix: true,
            },
          },
          {
            path: '',
            name: 'home',
            meta: {
              title: '子菜单2',
              affix: true,
            },
          },
        ],
      },
      {
        path: '',
        name: 'home',
        meta: {
          title: '子菜单2',
          affix: true,
        },
      },
    ],
  },
]

function handleOpen() {
  console.log('🚀 ~ file: index.vue ~ line 13 ~ handleOpen ~ handleOpen', handleOpen)
}

function handleClose() {
  console.log('🚀 ~ file: index.vue ~ line 18 ~ handleClose ~ handleClose', handleClose)
}
</script>

<style lang="scss" scoped></style>
