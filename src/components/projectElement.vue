<script setup>
import { computed } from 'vue'
import { useProjectEventsHandler } from '@/composables/projectEventsHandler'
import backButtonElement from './backButtonElement.vue'
import songData from '../assets/songData.json'
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'
import { useScreenSize } from '@/composables/useScreenSize'

const { currentProject } = useProjectEventsHandler()
const { isXs } = useScreenSize()
const currProjectData = computed(() => {
  return songData.projects.find((project) => project.id === currentProject.value)
})
</script>

<template>
  <div class="project-main">
    <div class="project-back-button">
      <backButtonElement />
    </div>
    <div class="project-header" :style="{ fontSize: isXs ? '50px' : '60px' }">
      {{ currProjectData.name }}
    </div>
    <div class="project-description">
      <div class="h2 project-subheader">Description</div>
      <div class="project-description-body">
        {{ currProjectData.projectDescription }}
      </div>
    </div>
    <div class="h2 project-subheader">Demo</div>
    <div class="project-youtube-embed" v-if="currProjectData.youtubeID">
      <LiteYouTubeEmbed :id="currProjectData.youtubeID" :title="currProjectData.videoTitle" />
    </div>
  </div>
</template>

<style>
.project-main {
  margin: var(--padding-component);
}
.project-header {
  font-weight: bold;
}
.project-youtube-embed {
  margin-top: 20px;
}
.project-subheader {
  margin: 20px 0px 20px 0px;
}
</style>
