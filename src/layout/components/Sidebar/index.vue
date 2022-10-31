<template>
  <div>
    <el-menu
      defaultActive="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <SidebarItem />
    </el-menu>
  </div>
</template>

<script setup>
import SidebarItem from './SidebarItem.vue'

function handleOpen() {
  console.log('🚀 ~ file: index.vue ~ line 13 ~ handleOpen ~ handleOpen', handleOpen)
}

function handleClose() {
  console.log('🚀 ~ file: index.vue ~ line 18 ~ handleClose ~ handleClose', handleClose)
}
</script>

<style lang="scss" scoped></style>
