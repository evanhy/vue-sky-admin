<script setup lang="ts">
defineOptions({
  name: 'SvgIcon',
})

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  iconClass: {
    type: String,
    required: false,
  },
  color: {
    type: String,
  },
  size: {
    type: String,
    default: '1em',
  },
})

const symbolId = computed(() => `#${props.prefix}-${props.iconClass}`)
</script>

<template>
  <svg
    aria-hidden="true"
    class="svg-icon inline-block h-4 w-4 overflow-hidden fill-current outline-none -v-15%"
    :style="`width:${size};height:${size}`"
  >
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>
