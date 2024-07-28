<script setup>
import headerElement from './headerElement.vue';
</script>

<template>
    <div class="navbar-main component-padding">
        <headerElement size="h3" weight="bold" name="My Library"/>
    </div>
</template>

<style scoped>
.navbar-main {
    width: 25vw;
    height: 100vh;
    background-color: green;
}
</style>