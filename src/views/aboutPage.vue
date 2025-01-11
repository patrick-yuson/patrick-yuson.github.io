<script setup>
import { ref } from 'vue'
import { useScreenSize } from '@/composables/useScreenSize'
// import navbarComponent from '@/components/navbarComponent.vue'
import nowPlaying from '@/components/nowPlaying.vue'
import centerComponent from '@/components/centerComponent.vue'
import nowPlayingMobile from '@/components/nowPlayingMobile.vue'

const navbarToggled = ref(false)
const footerClicked = ref(false)
const { isMobile } = useScreenSize()

const handleModalClose = () => {
  footerClicked.value = false
}
const handleFooterClick = () => {
  footerClicked.value = true
}
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
    <div v-if="isMobile && footerClicked" class="modal-container">
      <div class="modal-content">
        <nowPlaying @clicked="handleModalClose" />
      </div>
    </div>
    <div v-if="isMobile && !footerClicked">
      <nowPlayingMobile @clicked="handleFooterClick" />
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
.modal-content {
  border-radius: 15px;
  max-width: 90%;
  max-height: 75%;
  width: 400px;
  text-align: center;
}
.modal-container {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
/* Ensure content above "Now Playing" is scrollable */
/* body {
  padding-bottom: 60px; 
} */
</style>
