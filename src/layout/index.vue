<!--
 * @Date: 2022-11-16 17:12:00
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2022-11-16 17:50:38
 * @FilePath: /vue3-admin-template-/src/layout/index.vue
-->
<template>
  <div class="layout-wrap">
    <Sidebar class="silebar-wrap" />

    <div class="main-container">
      container
    </div>
  </div>
</template>
<script setup>
import Sidebar from './components/Sidebar/index.vue'

</script>
<style lang='scss' scoped>
  .layout-wrap {
    .silebar-wrap {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1001;
      overflow: hidden;
      border-right: .5px solid #EEEEEE;
      width: var(--side-bar-width) !important;
      height: 100%;
      font-size: 0;
      background-color: var(--el-menu-bg-color);
      transition: width .28s;
    }

    .main-container {
      position: relative;
      margin-left: var(--side-bar-width);
      min-height: 100%;
      transition: margin-left .28s;
    }
  }
</style>
