<script setup>
import profileComponent from './profileComponent.vue'
import projectElement from './projectElement.vue';
import { useProjectEventsHandler } from '@/composables/projectEventsHandler';

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  navbarToggled: { type: Boolean }
})
const { currentProject } = useProjectEventsHandler()
</script>

<template>
  <div class="center-main component no-padding" :class="{ full: navbarToggled === false }">
    <projectElement v-if="currentProject"/>
    <profileComponent v-else/>
  </div>
</template>

<style scoped>
.center-main {
  width: 100%;
  height: 100vh;
}
.no-padding {
  padding: 0px;
}
</style>