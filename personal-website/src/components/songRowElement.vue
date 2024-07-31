<script setup>
import albumCoverElement from './albumCoverElement.vue';
</script>

<template>
    <div class="song-row-main">
        <div class="song-row-num">1</div>
        <div class="song-row-album">
            <albumCoverElement />
        </div>
        <div class="song-row-title-artist">
            <div class="song-row-title">Title</div>
            <div class="song-row-artist">Artist</div>
        </div>
        <div class="song-row-duration">Duration</div>
    </div>
</template>

<style scoped>
.song-row-main {
    display: flex;
    flex-direction: row;
    background-color: grey;
    height: 60px;
    align-items: center;
    gap: 10px;
}
.song-row-num {
    margin: 0px 15px 0px 25px;
}
.song-row-album {
    background-color: red;
    height: 100%;
    width: 60px;
}
.song-row-title-artist {
    display: flex;
    flex-direction: column;
    width: 60%;
    font-size: var(--font-size-h4);
}
.song-row-title {
    font-size: var(--font-size-h4);
    margin-bottom: 5px;
}
.song-row-artist {
    font-size: var(--font-size-body);
}
</style>