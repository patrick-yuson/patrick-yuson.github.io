<script setup>
import albumCoverElement from './albumCoverElement.vue';

const left = defineModel('left', { default: null, type: [Number, null] })
const albumCover = defineModel('albumCover', { default: null, type: [String, null] })
const title = defineModel('title', { default: null, type: [String, null] })
const artist = defineModel('artist', { default: null, type: [String, null] })
const location = defineModel('location', { default: null, type: [String, null] })
const duration = defineModel('duration', { default: null, type: [String, null] })
</script>

<template>
    <div class="song-row-main">
        <div class="song-row-num" v-if="left || $slots.left">
            {{ left }}
            <slot name="left"></slot>
        </div>
        <div class="song-row-album" v-if="albumCover">
            <albumCoverElement :src="albumCover" :forRow="true"/>
        </div>
        <div class="song-row-title-artist">
            <div class="song-row-title" v-if="title">{{ title }}</div>
            <div class="song-row-artist" v-if="artist">{{ artist }}</div>
        </div>
        <div class="song-row-location" v-if="location">{{ location }}</div>
        <div class="song-row-duration" v-if="duration">{{ duration }}</div>
    </div>
</template>

<style scoped>
@import url(../assets/base.css);
.song-row-main {
    display: flex;
    flex-direction: row;
    height: 60px;
    align-items: center;
}
.song-row-num {
    min-width: 60px;
    text-align: center;
}
.song-row-album {
    height: 60px;
    width: 60px;
}
.song-row-title-artist {
    display: flex;
    flex-direction: column;
    min-width: 40%;
    font-size: var(--font-size-h4);
    margin-left: 10px;
}
.song-row-title {
    font-size: var(--font-size-h4);
    margin-bottom: 5px;
}
.song-row-artist {
    font-size: var(--font-size-body);
}
.song-row-location {
    min-width: 15%;
    text-align: right;
}
.song-row-duration {
    width: 100%;
    text-align: right;
}
</style>