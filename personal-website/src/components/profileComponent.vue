<script setup>
import { ref } from 'vue'
import iconElement from './iconElement.vue'
import centerSectionElement from './centerSectionElement.vue'
import songRowElement from './songRowElement.vue'
import profileData from '../assets/profileData.json'

const data = ref(JSON.parse(JSON.stringify(profileData)))
const icons = data.value.socials
const experiences = data.value.experiences

const currentID = ref(null)
const setCurrent = (id) => {
  currentID.value = currentID.value === id ? currentID.value : id
}

function redirectToUrl(url) {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="profile-main">
    <div class="profile-header-card">
      <div class="profile-name">Patrick Yuson</div>
    </div>
    <div class="profile-socials">
      <iconElement
        v-for="icon in icons"
        :key="icon.id"
        :name="icon.name"
        :src="icon.src"
        height="75"
        width="75"
        @click="redirectToUrl(`${icon.redirect}`)"
        class="clickable"
      />
    </div>
    <centerSectionElement header="Experiences">
      <template #content>
        <div class="profile-song-row" v-for="exp in experiences" :key="exp.id">
          <songRowElement
            :left="exp.id"
            :albumCover="exp.album_cover"
            :title="exp.title"
            :artist="exp.artist"
            :location="exp.location"
            :duration="exp.duration"
            v-model="currentID"
            @click="setCurrent(exp.id)"
          />
        </div>
      </template>
    </centerSectionElement>
  </div>
</template>

<style scoped>
.profile-header-card {
  position: relative;
  height: 40vh;
  width: 100%;
  background-size: cover;
  background-position: 50% 20%;
  overflow: hidden; /* Ensure the pseudo-element stays within bounds */
}
.profile-header-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://i.scdn.co/image/ab67618600001016f0f7c27f520117bc06b69f45');
  background-size: cover;
  background-position: 50% 20%;
  filter: brightness(85%);
  z-index: 1;
}
.profile-name {
  position: absolute;
  z-index: 2;
  bottom: 20px;
  left: 20px;
  font-size: 75px;
  font-weight: bold;
}
.profile-song-row {
  padding: 4px;
  border-radius: var(--border-radius-album);
}
.profile-song-row:hover {
  background-color: var(--hh-c-brown-lightest);
  cursor: pointer;
}
.profile-socials {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  margin: 20px 0px 0px 1.5%;
}
.clickable:hover {
  cursor: pointer;
}
</style>
