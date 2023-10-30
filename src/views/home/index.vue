<script setup lang='ts'>
defineOptions({
  name: 'Home',
})
</script>

<template>
  <div>
    <el-row :gutter="10" class="pb-10px">
      <el-col v-for="index in 4" :key="index" :span="6">
        <el-card class="min-h-40">
          {{ index }}
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col v-for="index in 2" :key="index" :span="12">
        <el-card class="min-h-120">
          {{ index }}
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>

</style>
