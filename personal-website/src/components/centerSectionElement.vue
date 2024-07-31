<script setup>
import headerElement from './headerElement.vue';
const header = defineModel('header', { default: null, type: [String, null] })
</script>

<template>
  <div class="center-section-main">
    <div v-if="header || $slots.header">
      <headerElement :name="header" size="h2" weight="bold"/>
      <slot name="header"></slot>
    </div>
    <div v-if="$slots.content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>
.center-section-main {
  margin: 20px;
  width: 100%;
}
</style>
