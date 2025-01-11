<script setup>
import albumCoverElement from './albumCoverElement.vue'
import { useProjectEventsHandler } from '@/composables/projectEventsHandler'
import { useScreenSize } from '@/composables/useScreenSize'

const albums = defineModel('albums', { default: null, type: [Array, null] })
const { setCurrentProject } = useProjectEventsHandler()
const { isXs } = useScreenSize()
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
            <div
              class="album-name"
              :style="{ fontSize: isXs ? 'var(--font-size-mobile-header)' : 'var(--font-size-h4)' }"
            >
              {{ album.name }}
            </div>
            <div
              class="album-subheader"
              :style="{ fontSize: isXs ? 'var(--font-size-mobile-body)' : 'var(--font-size-h4)' }"
            >
              {{ album.subheader }}
            </div>
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
  font-weight: bold;
}
</style>
