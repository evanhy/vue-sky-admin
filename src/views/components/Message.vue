<script setup lang="ts">
import { h } from 'vue'
import { closeAllMessage, message } from '@/utils/message'

defineOptions({
  name: 'Message',
})
</script>

<template>
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span class="font-medium"> 二次封装Message提示 </span>
      </div>
    </template>

    <h4 class="mb-4">
      element-plus 的消息提示，点击弹出提示信息
    </h4>

    <el-space wrap>
      <el-button
        type="info"
        @click="message('Info类型消息', { })"
      >
        Info
      </el-button>
      <el-button
        type="success"
        @click="
          message('Success类型消息', { type: 'success' })
        "
      >
        Success
      </el-button>
      <el-button
        type="warning"
        @click="
          message('Warning类型消息', { type: 'warning' })
        "
      >
        Warning
      </el-button>
      <el-button
        type="danger"
        @click="message('Error类型消息', { type: 'error' })"
      >
        Error
      </el-button>
      <el-button
        @click="message('可关闭消息', { showClose: true })"
      >
        可关闭
      </el-button>
      <el-button
        @click="
          message('分组消息合并', {
            type: 'success',
            grouping: true,
          })
        "
      >
        分组消息合并
      </el-button>
      <el-button
        @click="
          message('3秒后关闭', {
            duration: 3000,
            onClose: () =>
              message('消息已关闭', { type: 'success' }),
          })
        "
      >
        自定义延时关闭时间并设置关闭后其他操作
      </el-button>
      <el-button
        @click="
          message(
            h('p', null, [
              h('span', null, 'Message can be '),
              h('i', { style: 'color: teal' }, 'VNode'),
            ]),
            { },
          )
        "
      >
        自定义内容
      </el-button>
      <el-button
        @click="
          message('<strong>This is <i>HTML</i> string</strong>', {

            dangerouslyUseHTMLString: true,
          })
        "
      >
        HTML 片段作为正文内容
      </el-button>
    </el-space>

    <el-divider />

    <el-button @click="closeAllMessage">
      关闭所有消息提示
    </el-button>
  </el-card>
</template>
