<template>
  <div class="sidebar-wrap">
    <el-scrollbar>
      <el-menu
        class="el-menu-vertical"
        :defaultActive="activeMenu"
        :collapse="!isCollapse"
        :uniqueOpened="false"
        :collapseTransition="false"
        mode="vertical">
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :basePath="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script setup>

</script>
