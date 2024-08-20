<script setup>
const src = defineModel('src', { default: null, type: [String, null] })
const forRow = defineModel('forRow', { default: false, type: [Boolean, null] })
</script>

<template>
  <div class="album-cover-main">
    <img class="album-cover-img" :src="src" :class="{ 'for-row': forRow }" />
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
