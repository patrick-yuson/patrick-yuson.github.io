<script setup>
import { computed } from 'vue'
import { useProjectEventsHandler } from '@/composables/projectEventsHandler';
import backButtonElement from './backButtonElement.vue';
import songData from '../assets/songData.json'

const { currentProject } = useProjectEventsHandler()
const currProjectData = computed(() => {
    return songData.projects.find(project => project.id === currentProject.value)
})
</script>

<template>
    <div class="project-main">
        <div class="project-back-button">
            <backButtonElement />
        </div>
        <div class="project-header">{{ currProjectData.name }}</div>
    </div>
</template>

<style>
.project-main {
    margin: var(--padding-component);
}
.project-header {
    font-size: 60px;
    font-weight: bold;
}
</style>