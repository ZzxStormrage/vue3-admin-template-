<!--
 * @Date: 2022-10-28 18:29:14
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2022-11-01 11:12:10
 * @FilePath: /vue3-app/src/layout/components/Sidebar/SidebarItem.vue
-->
<template>
  <el-sub-menu :index="props.item.path" popperAppendToBody>
    <template #title>
      <!-- <svg-icon v-if="props.item.meta && props.item.meta.svgIcon" :name="props.item.meta.svgIcon" /> -->
      <!-- <component :is="props.item.meta.elIcon" v-else-if="props.item.meta && props.item.meta.elIcon" class="el-icon" /> -->
      <span v-if="props.item.meta && props.item.meta.title">{{ props.item.meta.title }}</span>
    </template>

    <template v-if="props.item.children">
      <SidebarItem
        v-for="child in props.item.children"
        :key="child.path"
        :item="child"
        :isCollapse="props.isCollapse"
        :isFirstLevel="false"
        :basePath="child.path" />
    </template>

  </el-sub-menu>
</template>

<script setup>

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  basePath: {
    type: String,
    default: '',
  },
})

</script>

<style lang="scss" scoped>

</style>
