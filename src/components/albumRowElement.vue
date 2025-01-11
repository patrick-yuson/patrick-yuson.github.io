<script setup>
import albumCoverElement from './albumCoverElement.vue'
import { useProjectEventsHandler } from '@/composables/projectEventsHandler'

const albums = defineModel('albums', { default: null, type: [Array, null] })
const { setCurrentProject } = useProjectEventsHandler()
</script>

<template>
  <div class="album-row-main">
    <div class="album-row-flex">
      <div v-for="album in albums" :key="album.id">
        <div class="album-outer-div" @click="setCurrentProject(album)">
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
  </div>
</template>

<style scoped>
.album-row-main {
  height: 100%;
}
.album-row-flex {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
  overflow-x: scroll;
}
.album-outer-div {
  padding: 10px;
}
.album-outer-div:hover {
  background-color: var(--hh-c-brown-lightest);
  border-radius: var(--border-radius-album);
  cursor: pointer;
}
.album-row-cover {
  width: 175px;
  height: 175px;
  overflow: hidden;
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
