<!-- 打字机效果组件（简单封装，更多配置项参考 https://www.typeitjs.com/docs/vanilla/usage#options） -->
<script setup lang="ts">
import TypeIt from 'typeit'

defineOptions({
  name: 'TypeIt',
})

const props = defineProps({
  /** 打字速度，以每一步之间的毫秒数为单位，默认`200` */
  speed: {
    type: Number,
    default: 200,
  },
  // 打字内容
  values: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  // 类名
  className: {
    type: String,
    default: 'type-it',
  },
  // 是否显示光标
  cursor: {
    type: Boolean,
    default: true,
  },
})

onMounted(() => {
  new (TypeIt as any)(`.${props.className}`, {
    strings: props.values,
    speed: props.speed,
    cursor: props.cursor,
  }).go()
})
</script>

<template>
  <span :class="className" />
</template>
