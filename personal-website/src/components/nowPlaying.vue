<script setup>
import headerElement from './headerElement.vue'
import albumCoverElement from './albumCoverElement.vue'
import cardElement from './cardElement.vue'
</script>

<template>
  <div class="now-playing-main component">
    <headerElement name="Now Playing" size="h3" weight="bold" />
    <albumCoverElement
      src="https://static.wixstatic.com/media/bf0fd5_b8a2e928e311438b8533f99592a3994b~mv2.png/v1/fill/w_560,h_556,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Sun%20tribe.png"
    />
    <div class="now-playing-title">Frontend Engineering Intern</div>
    <div class="now-playing-artist">Lumin Smart Panel</div>
    <cardElement header="My Task">
      <template #content>
        <div class="">
          With a cohort of two other interns, I was tasked to build an application for Customer
          Support that used company data sources to provide context about Lumin's devices in a way
          that is efficient and digestible
        </div>
      </template>
    </cardElement>
  </div>
</template>

<style scoped>
.now-playing-main {
  height: 100vh;
}
.now-playing-title {
  margin: 20px 0px 0px 0px;
  font-size: var(--font-size-h2);
  font-weight: bold;
}
.now-playing-artist {
  margin: 5px 0px 0px 0px;
  font-size: 18px;
}
.now-playing-about {
  height: 500px;
  width: 100%;
}
</style>
