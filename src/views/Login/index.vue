<script setup lang='ts'>
import { message } from 'ant-design-vue'

function info() {
  message.info('Hello, Ant Design Vue!')
}
</script>

<template>
  <div>
    <a-button type="primary" @click="info">
      Login
    </a-button>
  </div>
</template>

<style scoped>

</style>
