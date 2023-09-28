<script lang="ts" setup>
import { constantMenus } from '@/router/utils'

defineOptions({
  name: 'Layout',
})
</script>

<template>
  <el-container class="layout-container h-screen">
    <!--   侧边栏   -->
    <el-aside width="210px">
      <div class="sidebar-container">
        <div class="h-12 flex-c cursor-pointer pl-12px text-2xl text-white" @click="$router.push('/')">
          SKYADMIN
        </div>
        <el-scrollbar wrap-class="scrollbar-wrapper" class="!overflow-auto">
          <!--     TODO: 现在的路由先写死, 后面需要根据路由动态生成     -->
          <el-menu router default-active="/home">
            <el-menu-item v-for="menu in constantMenus" :key="menu.path" :index="menu.path">
              <template #title>
                <i :class="menu.meta.icon" class="mr-5px" />
                <span>{{ menu.meta.title }}</span>
              </template>
            </el-menu-item>
          </el-menu>
        </el-scrollbar>
      </div>
    </el-aside>

    <el-container>
      <el-header>
        <div>
          Header
        </div>
      </el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
@import url("@/styles/layout.scss");
</style>
