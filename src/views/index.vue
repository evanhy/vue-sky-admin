<script setup lang='ts'>
const count = ref(0)
</script>

<template>
  <div>
    Home{{ count }}
    <button @click="count++">
      count++
    </button>
  </div>
</template>

<style scoped>

</style>
