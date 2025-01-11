<script setup>
import { useProjectEventsHandler } from '@/composables/projectEventsHandler';
import iconElement from './iconElement.vue';

const { currentProject } = useProjectEventsHandler()
const handleClick = () => {
    currentProject.value = null
}
</script>

<template>
    <div class="back-button-main" @click="handleClick">
        <!-- <button class="button" @click="handleClick">Back</button> -->
        <iconElement name="arrow_back_ios_new" :google="true" class="button"/>
    </div>
</template>

<style>
.back-button-main {
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}
.back-button-main:hover {
    cursor: pointer;
    background-color: var(--hh-c-brown-lightest);
}
</style>