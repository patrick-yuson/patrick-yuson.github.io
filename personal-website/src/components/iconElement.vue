<script setup>
const name = defineModel("name", { default: null, type: [String, null] });
const filled = defineModel("filled", { default: false, type: [Boolean, null] })
</script>

<template>
  <div class="icon-main">
    <span class="material-symbols-outlined" :class="{ 'filled': filled === true }">
      {{ name }}
    </span>
  </div>
</template>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
  font-size: 25px;
}
.filled {
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24;
}
</style>
