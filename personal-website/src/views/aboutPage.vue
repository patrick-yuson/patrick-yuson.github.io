<script setup>
import navbarComponent from '@/components/navbarComponent.vue'
import nowPlaying from '@/components/nowPlaying.vue'
</script>

<template>
  <div class="about-main">
    <!-- <div>Hello World</div> -->
    <navbarComponent />
    <div class="placeholder">Artist Name</div>
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
