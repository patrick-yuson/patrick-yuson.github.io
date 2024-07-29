<script setup>
const name = defineModel('name', { default: null, type: [String, null] })
const filled = defineModel('filled', { default: false, type: [Boolean, null] })
const google = defineModel('google', { default: false, type: [Boolean, null] })
const src = defineModel('src', { default: null, type: [String, null] })
const height = defineModel('height', { default: null, type: [String, null] })
const width = defineModel('width', { default: null, type: [String, null] })
</script>

<template>
  <div class="icon-main">
    <span
      v-if="google === true"
      class="material-symbols-outlined"
      :class="{ filled: filled === true }"
    >
      {{ name }}
    </span>
    <img class="img" v-else :src="src" :height="height" :width="width" />
  </div>
</template>

<style scoped>
.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
  font-size: 25px;
}
.filled {
  font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
}
.img {
  transition: transform 0.3s ease;
}
.img:hover {
  transform: scale(1.1);
}
</style>
