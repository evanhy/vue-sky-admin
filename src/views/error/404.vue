<script setup lang='ts'>
</script>

<template>
  <div h-screen w-screen flex-c>
    <el-result
      icon="warning"
      title="404 资源不存在"
      sub-title="生活总归带点荒谬"
    >
      <template #extra>
        <el-button type="primary" @click="$router.push('/')">
          Back
        </el-button>
      </template>
    </el-result>
  </div>
</template>

<style scoped>

</style>
