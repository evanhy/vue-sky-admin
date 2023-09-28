<script setup lang="ts">
defineOptions({
  name: 'LayoutHeader',
})
</script>

<template>
  <div class="h-12 flex items-center lh-12">
    <div flex-1>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">
          首页
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <span class="i-carbon:settings" />
    </div>
  </div>
</template>

<style scoped>

</style>
