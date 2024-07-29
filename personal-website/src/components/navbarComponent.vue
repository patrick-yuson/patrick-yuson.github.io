<script setup>
import headerElement from './headerElement.vue'
import iconElement from './iconElement.vue'

const showingNav = defineModel()

const handleMetaLeftClick = () => {
  showingNav.value = !showingNav.value
}
</script>

<template>
  <div class="navbar-main component">
    <div class="navbar-showing" v-if="showingNav">
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
      <iconElement
        name="library_music"
        class="navbar-hidden-icon"
        :google="true"
        @click="handleMetaLeftClick"
      />
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
  width: 100%;
}
.navbar-hidden-icon {
  color: var(--vt-c-text-dark-2);
}
.navbar-hidden-icon:hover {
  cursor: pointer;
  color: var(--vt-c-white-soft);
}
</style>
