<script setup lang="ts">
defineOptions({
  name: 'LayoutHeader',
})
</script>

<template>
  <div class="h-12 flex items-center lh-12 text-#000000D9">
    <div flex-1>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">
          首页
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div flex-c>
      <div mx-6 flex-c text-sm>
        <el-avatar
          size="small"
          src="https://avatars.githubusercontent.com/u/20672099?v=4"
        />
        <span ml-2>admin</span>
      </div>
      <span class="i-carbon:settings cursor-pointer" />
    </div>
  </div>
</template>
