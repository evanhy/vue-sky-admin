<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

const locale = ref('zh')

const currentLocale = computed(() => {
  return locale.value === 'zh' ? zhCn : en
})
</script>

<template>
  <!--  <div font-sans text="gray-700 dark:gray-200" > -->
  <!--    <RouterView /> -->
  <!--  </div> -->
  <el-config-provider :locale="currentLocale">
    <router-view />
  </el-config-provider>
</template>
