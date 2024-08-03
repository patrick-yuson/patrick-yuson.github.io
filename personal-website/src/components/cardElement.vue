<script setup>
import headerElement from './headerElement.vue'

const header = defineModel('header', { default: null, type: [String, null] })
const headerImg = defineModel('headerImg', { default: null, type: [String, null] })
const content = defineModel('content', { default: null, type: [String, null] })
</script>

<template>
  <div class="card-main">
    <div
      v-if="headerImg !== null"
      :style="{ 'background-image': `url(${headerImg})` }"
      class="card-img-header"
    >
      <div class="translucent-overlay">
        <div v-if="header || $slots.header" class="card-body card-header">
          <headerElement :name="header" size="h4" />
          <slot name="header"></slot>
        </div>
      </div>
    </div>
    <div v-else>
      <div v-if="header || $slots.header" class="card-body card-header">
        <headerElement :name="header" size="h4" />
        <slot name="header"></slot>
      </div>
    </div>
    <div v-if="content || $slots.content" class="card-body card-content">
      {{ content }}
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>
@import url('../assets/base.css');
.card-main {
  background-color: var(--hh-c-brown-lightest);
  width: 100%;
  height: auto;
  margin: 20px 0px 20px 0px;
  border-radius: var(--border-radius-main);
  box-shadow: 0px 5px 5px var(--hh-c-brown);
}
.card-body {
  padding: 0px 20px 20px 20px;
}
.card-header {
  padding: 20px 20px 0px 20px;
  font-weight: bold;
}
.card-content {
  padding-top: 20px;
}
.card-img-header {
  position: relative;
  height: 40vh;
  width: 100%;
  background-size: cover;
  background-position: 50% 30%;
  overflow: hidden;
}
.translucent-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3); /* semi-transparent black background */
  display: flex;
  align-items: top;
  justify-content: left;
  height: 100%;
}
/* .card-img-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: 50% 30%;
  filter: brightness(85%);
  z-index: 1;
} */
</style>
