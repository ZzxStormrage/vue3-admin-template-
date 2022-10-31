<!--
 * @Date: 2022-10-28 18:29:14
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2022-10-31 11:38:51
 * @FilePath: /vue3-app/src/layout/components/Sidebar/SidebarItem.vue
-->
<template>
  <el-sub-menu index="1">
    <template #title>
      <el-icon><location /></el-icon>
      <span>Navigator One</span>
    </template>
    <el-menu-item-group title="Group One">
      <el-menu-item index="1-1">item one</el-menu-item>
      <el-menu-item index="1-2">item two</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="Group Two">
      <el-menu-item index="1-3">item three</el-menu-item>
    </el-menu-item-group>
    <el-sub-menu index="1-4">
      <template #title>item four</template>
      <el-menu-item index="1-4-1">item one</el-menu-item>
    </el-sub-menu>
  </el-sub-menu>
  <el-menu-item index="2">
    <el-icon><icon-menu /></el-icon>
    <span>Navigator Two</span>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <el-icon><document /></el-icon>
    <span>Navigator Three</span>
  </el-menu-item>
  <el-menu-item index="4">
    <el-icon><setting /></el-icon>
    <span>Navigator Four</span>
  </el-menu-item>
</template>

<script setup>
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

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

</script>

<style lang="scss" scoped>

</style>
