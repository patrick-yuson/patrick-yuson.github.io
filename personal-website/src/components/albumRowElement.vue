<script setup>
import albumCoverElement from './albumCoverElement.vue'

const albums = defineModel('albums', { default: null, type: [Array, null] })
</script>

<template>
  <div class="album-row-main">
    <div class="album-row-flex">
      <div v-for="album in albums" :key="album.id">
        <div class="album-and-name">
          <div class="album-row-album-cover">
            <albumCoverElement
              v-if="album.src"
              :src="album.src"
              width="100%"
              class="album-row-cover"
            />
          </div>
          <div class="album-name">{{ album.name }}</div>
          <div class="album-subheader">{{ album.subheader }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.album-row-main {
  height: 250px;
  padding: 0px 0px 20px 0px;
}
.album-row-flex {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
  overflow-x: scroll;
}
.album-row-cover {
  height: 175px;
  overflow: hidden;
}
.album-and-name {
  max-width: 250px;
}
.album-name {
  padding-top: 10px;
  font-size: var(--font-size-h4);
  font-weight: bold;
}
</style>
