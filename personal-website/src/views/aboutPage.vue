<script setup>
import { ref } from 'vue'
import navbarComponent from '@/components/navbarComponent.vue'
import nowPlaying from '@/components/nowPlaying.vue'
import centerComponent from '@/components/centerComponent.vue'

const navbarToggled = ref(false)
</script>

<template>
  <div class="about-main">
    <div class="left">
      <navbarComponent v-model="navbarToggled" />
      <centerComponent :navbarHidden="navbarToggled" />
    </div>
    <div class="now-playing">
      <nowPlaying />
    </div>
  </div>
</template>

<style scoped>
.about-main {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.left {
  display: flex;
  flex-direction: row;
  gap: 5px;
  width: 100%;
}
.now-playing {
  width: 34vw;
}
</style>
