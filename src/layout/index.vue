<script lang="ts" setup>
import { constantMenus } from '@/router/utils'
import LayoutHeader from '@/layout/components/LayoutHeader.vue'

defineOptions({
  name: 'Layout',
})
const route = useRoute()
const defaultActive = ref('/home')

watchEffect(() => {
  defaultActive.value = route.path
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
        <el-scrollbar class="!overflow-auto">
          <!--     TODO: 现在的路由先写死, 后面需要根据路由动态生成     -->
          <el-menu router :default-active="defaultActive" unique-opened>
            <template v-for="menu in constantMenus" :key="menu.path">
              <el-menu-item v-if="!menu.children" :index="menu.path">
                <template #title>
                  <i :class="menu.meta.icon" class="mr-5px" />
                  <span>{{ menu.meta.title }}</span>
                </template>
              </el-menu-item>
              <el-sub-menu v-else :index="menu.path">
                <template #title>
                  <i :class="menu.meta.icon" class="mr-5px" />
                  <span>{{ menu.meta.title }}</span>
                </template>
                <el-menu-item v-for="child in menu.children" :key="child.path" :index="child.path">
                  <template #title>
                    <span>{{ child.meta.title }}</span>
                  </template>
                </el-menu-item>
              </el-sub-menu>
            </template>
          </el-menu>
        </el-scrollbar>
      </div>
    </el-aside>

    <el-container>
      <el-header>
        <LayoutHeader />
      </el-header>

      <el-main>
        <div class="min-h-[calc(100vh-48px)] bg-[#F0F2F5] p-4">
          <router-view />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
@import url("@/styles/layout.scss");
</style>
