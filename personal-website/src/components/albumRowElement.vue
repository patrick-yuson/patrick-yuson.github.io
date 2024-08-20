<script setup>
import albumCoverElement from './albumCoverElement.vue'

const albums = defineModel('albums', { default: null, type: [Array, null] })
</script>

<template>
  <div class="album-row-main">
    <div class="album-row-flex">
      <div v-for="album in albums" :key="album.id">
        <div class="album-and-name">
          <albumCoverElement v-if="album.src" :src="album.src" class="album-row-cover" />
          <div class="album-name">{{ album.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.album-row-main {
  height: 250px;
  padding: 0px 20px 20px 0px;
}
.album-row-flex {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
}
.album-row-cover {
  height: 175px;
  width: 175px;
}
.album-and-name {
  width: 175px;
}
.album-name {
  padding-top: 10px;
  font-size: var(--font-size-h4);
  font-weight: bold;
}
</style>
