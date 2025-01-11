<script setup>
import albumCoverElement from './albumCoverElement.vue'
import iconElement from './iconElement.vue'
import { useSongEventsHandler } from '@/composables/songEventsHandler'

const { currentSong } = useSongEventsHandler()
</script>

<template>
  <div class="now-playing-mobile-main">
    <div class="now-playing-mobile-song">
      <albumCoverElement
        v-if="currentSong.album_cover"
        class="now-playing-mobile-album"
        :src="currentSong.album_cover"
      />
      <div class="now-playing-mobile-song-details">
        <div class="now-playing-mobile-song-title">{{ currentSong.title }}</div>
        <div class="now-playing-mobile-song-artist">{{ currentSong.artist }}</div>
      </div>
    </div>
    <iconElement name="pause" :filled="true" :google="true" />
  </div>
</template>

<style>
.now-playing-mobile-main {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  border-radius: 15px;
  background: var(--hh-c-dark-brown);
  padding: 10px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.now-playing-mobile-song {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
}
.now-playing-mobile-album {
  height: 40px;
}
.now-playing-mobile-song-title {
  font-size: var(--font-size-mobile-header);
}
.now-playing-mobile-song-artist {
  font-size: var(--font-size-mobile-body);
}
</style>
