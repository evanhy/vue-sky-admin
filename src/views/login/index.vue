<script lang="ts" setup>
import cat from '@/assets/svg/cat.svg'
import Motion from '@/composables/motion'
import TypeIt from '@/composables/typeit'

const { loginRef, loginForm, loginRules, login } = useLogin()
</script>

<template>
  <div class="h-screen w-screen overflow-hidden">
    <img src="/bg.png" alt="" class="fixed bottom-0 left-0 z--1 h-full">
    <div class="absolute bottom-0 left-0 hidden h-100 w-100 sm:block">
      <img
        :src="cat" alt=""
        class="h-full w-full object-cover"
      >
    </div>
    <div class="float-right h-full flex items-center p-30 text-center">
      <div
        class="w-60 sm:w-100"
      >
        <Motion>
          <h1 class="my-10 text-4xl font-bold text-gray">
            <TypeIt :values="['SKYADMIN']" :cursor="false" :speed="150" />
          </h1>
        </Motion>
        <Motion :delay="100">
          <el-form ref="loginRef" :model="loginForm" :rules="loginRules">
            <el-form-item label="" prop="username">
              <el-input
                v-model="loginForm.username"
                placeholder="账号"
              >
                <template #prepend>
                  <span class="i-carbon:user" />
                </template>
              </el-input>
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input
                v-model="loginForm.password"
                placeholder="密码"
                type="password"
              >
                <template #prepend>
                  <span class="i-carbon:password" />
                </template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="w-full" @click="login(loginForm)">
                登录
              </el-button>
            </el-form-item>
          </el-form>
        </motion>
      </div>
    </div>
  </div>
</template>
