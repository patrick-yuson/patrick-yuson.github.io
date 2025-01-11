<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="home-main">
    <div>Hey! Welcome to my website :D</div>
    <div>Here's the About page:</div>
    <nav>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>
</template>

<style scoped></style>
