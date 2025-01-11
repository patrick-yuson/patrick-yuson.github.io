<script setup>
import { ref } from 'vue'
import { useScreenSize } from '@/composables/useScreenSize'
// import navbarComponent from '@/components/navbarComponent.vue'
import nowPlaying from '@/components/nowPlaying.vue'
import centerComponent from '@/components/centerComponent.vue'

const navbarToggled = ref(false)
const { isMobile } = useScreenSize()
</script>

<template>
  <div class="about-main">
    <div class="left" :style="{ width: isMobile ? '100%' : '75vw' }">
      <!-- <navbarComponent v-model="navbarToggled" /> -->
      <centerComponent :navbarHidden="navbarToggled" />
    </div>
    <div v-if="!isMobile" class="now-playing">
      <nowPlaying />
    </div>
  </div>
</template>

<style scoped>
.about-main {
  display: flex;
  width: 100%;
}
.left {
  display: flex;
  flex-direction: row;
  gap: 5px;
  width: 75vw;
  /* width: 100%; */
}
.now-playing {
  width: 25vw;
}
</style>
