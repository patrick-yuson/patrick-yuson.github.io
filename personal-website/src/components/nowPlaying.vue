<script setup>
import headerElement from './headerElement.vue';
import albumCoverElement from './albumCoverElement.vue';
</script>

<template>
  <div class="now-playing-main component">
    <headerElement name="What I'm Up To" size="h3" weight="bold"/>
    <albumCoverElement src="https://static.wixstatic.com/media/bf0fd5_b8a2e928e311438b8533f99592a3994b~mv2.png/v1/fill/w_560,h_556,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Sun%20tribe.png"/>
  </div>
</template>

<style scoped>
.now-playing-main {
  width: 25vw;
}
</style>
