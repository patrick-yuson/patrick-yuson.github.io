<script setup>
import { ref } from 'vue'
import headerElement from './headerElement.vue'
import iconElement from './iconElement.vue'

const showingLibrary = ref(false)

const handleMetaLeftClick = () => {
  showingLibrary.value = !showingLibrary.value
}
</script>

<template>
  <div class="navbar-main component">
    <div class="navbar-showing" v-if="showingLibrary">
      <headerElement
        size="h3"
        weight="bold"
        name="My Library"
        icon="library_music"
        :hover="true"
        color="grey"
        @clicked-meta-left="handleMetaLeftClick"
      />
    </div>
    <div class="navbar-hidden" v-else>
      <iconElement name="library_music" class="navbar-hidden-icon" @click="handleMetaLeftClick" />
    </div>
  </div>
</template>

<style scoped>
.navbar-main {
  height: 100vh;
}
.navbar-showing {
  width: 20vw;
}
.navbar-hidden {
  width: auto;
}
.navbar-hidden-icon {
  color: var(--vt-c-text-dark-2);
}
.navbar-hidden-icon:hover {
  cursor: pointer;
  color: var(--vt-c-white-soft);
}
</style>
