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
.left {
  display: flex;
  flex-direction: row;
  gap: 5px;
  width: 100%;
}
.placeholder {
  margin-top: 10px;
}
</style>
