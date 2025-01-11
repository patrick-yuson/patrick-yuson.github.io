<script setup>
import { computed } from 'vue'
import ml4vaImg from '../assets/ML4VA_Image.png'
import roryIO from '../assets/Rory.io_System_Details.png'
import bugle from '../assets/dailybugle.jpeg'

const src = defineModel('src', { default: null, type: [String, null] })
const forRow = defineModel('forRow', { default: false, type: [Boolean, null] })
const height = defineModel('height', { default: null, type: [String, null] })
const width = defineModel('width', { default: null, type: [String, null] })

const isAsset = computed(() => {
  return src.value.startsWith('.') ? true : false
})

const assetSrc = computed(() => {
  if (src.value.includes('ML4VA')) {
    return ml4vaImg
  } else if (src.value.includes('Rory.io')) {
    return roryIO
  } else if (src.value.includes('bugle')) {
    return bugle
  } else {
    console.error('File not properly loaded')
    return null
  }
})
</script>

<template>
  <div class="album-cover-main">
    <img v-if="isAsset" :src="assetSrc" class="album-cover-img" :height="height" :width="width" />
    <img v-else class="album-cover-img" :src="src" :class="{ 'for-row': forRow }" />
  </div>
</template>

<style scoped>
.album-cover-main {
  display: flex;
  justify-content: center;
}
.album-cover-img {
  height: 100%;
  width: 100%;
  border-radius: var(--border-radius-album);
}
.for-row {
  height: 60px;
  width: 60px;
}
</style>
