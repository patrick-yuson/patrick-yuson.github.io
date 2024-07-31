<script setup>
import profileComponent from './profileComponent.vue'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  navbarToggled: { type: Boolean }
})
</script>

<template>
  <div class="center-main component no-padding hide-scroll" :class="{ full: navbarToggled === false }">
    <profileComponent />
  </div>
</template>

<style scoped>
.center-main {
  width: 100%;
  height: 100vh;
}
.no-padding {
  padding: 0px;
}
</style>
