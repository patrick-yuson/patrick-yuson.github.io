<script setup>
const src = defineModel('src', { default: null, type: [String, null] })
</script>

<template>
    <div class="album-cover-main">
        <img class="album-cover-img" :src="src">
    </div>
</template>

<style scoped>
.album-cover-main {
    display: flex;
    justify-content: center;
}
.album-cover-img {
    height: 90%;
    width: 90%;
}
</style>