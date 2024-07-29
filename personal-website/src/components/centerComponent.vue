<script setup>
import profileComponent from './profileComponent.vue'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  navbarToggled: { type: Boolean }
})
</script>

<template>
  <div class="center-main component no-padding" :class="{ full: navbarToggled === false }">
    <profileComponent />
  </div>
</template>

<style scoped>
.center-main {
  width: 50%;
  height: 100vh;
}
.full {
  width: 100%;
}
.no-padding {
  padding: 0px;
}
</style>
