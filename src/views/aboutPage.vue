<script setup>
import { ref } from 'vue'
import { useScreenSize } from '@/composables/useScreenSize'
// import navbarComponent from '@/components/navbarComponent.vue'
import nowPlaying from '@/components/nowPlaying.vue'
import centerComponent from '@/components/centerComponent.vue'
import nowPlayingMobile from '@/components/nowPlayingMobile.vue'

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
    <div v-if="isMobile">
      <nowPlayingMobile />
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
}
.now-playing {
  width: 25vw;
}
/* Mobile View - Stick to Bottom */

/* .now-playing-mobile {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: var(--bg-color, #000);
  padding: 10px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
} */
/* Ensure content above "Now Playing" is scrollable */
body {
  padding-bottom: 60px; /* Adjust based on "Now Playing" height */
}
</style>
