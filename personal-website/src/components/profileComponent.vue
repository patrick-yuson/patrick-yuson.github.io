<script setup>
import iconElement from './iconElement.vue'
import centerSectionElement from './centerSectionElement.vue';
const icons = [
  {
    id: 1,
    name: 'LinkedIn',
    src: 'https://www.svgrepo.com/show/452051/linkedin.svg',
    redirect: 'https://www.linkedin.com/in/patrickyuson/'
  },
  {
    id: 2,
    name: 'GitHub',
    src: 'https://www.svgrepo.com/show/452211/github.svg',
    redirect: 'https://github.com/patrick-yuson'
  },
  {
    id: 3,
    name: 'Instagram',
    src: 'https://www.svgrepo.com/show/452231/instagram.svg',
    redirect: 'https://www.instagram.com/patrickyuson/'
  },
  {
    id: 4,
    name: 'Facebook',
    src: 'https://www.svgrepo.com/show/452197/facebook.svg',
    redirect: 'https://www.facebook.com/patrick.yuson.148'
  }
]
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
    <centerSectionElement header="Experience">
      <template #content>
      <!-- TODO: put list of "songs" -->
        <div>Hello World</div>
      </template>
    </centerSectionElement>
  </div>
</template>

<style scoped>
.profile-header-card {
  background-image: url('https://i.scdn.co/image/ab67618600001016f0f7c27f520117bc06b69f45');
  height: 40vh;
  width: 100%;
  background-size: cover;
  background-position: 50% 20%;
}
.profile-name {
  padding: 25vh 0px 0px 20px;
  font-size: 75px;
  font-weight: bold;
}
.profile-socials {
  display: flex;
  flex-direction: row;
  height: 10vh;
  width: 100%;
  margin: 20px 0px 0px 1.5%;
}
.clickable:hover {
  cursor: pointer;
}
</style>
