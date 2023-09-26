<script setup lang='ts'>
import { message } from 'ant-design-vue'

const [messageApi] = message.useMessage()
const count = ref(0)

function login() {
  messageApi.info('This is a normal message')
}
</script>

<template>
  <div>
    Home{{ count }}
    <a-button type="primary" @click="login">
      Primary Button
    </a-button>
  </div>
</template>

<style scoped>

</style>
