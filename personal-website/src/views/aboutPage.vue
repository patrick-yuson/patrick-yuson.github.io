<script setup>
import navbarComponent from '@/components/navbarComponent.vue'
import nowPlaying from '@/components/nowPlaying.vue'
import centerComponent from '@/components/centerComponent.vue'
</script>

<template>
  <div class="about-main">
    <navbarComponent />
    <centerComponent />
    <nowPlaying />
  </div>
</template>

<style scoped>
.about-main {
  display: flex;
  gap: 5px;
  justify-content: space-between;
  width: 100vw;
}
.placeholder {
  margin-top: 10px;
}
</style>
