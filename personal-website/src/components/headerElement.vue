<script setup>
import iconElement from './iconElement.vue'

const icon = defineModel('icon', { default: null, type: [String, null] })
const name = defineModel('name', { default: null, type: [String, null] })
const size = defineModel('size', { default: null, type: [String, null] })
const weight = defineModel('weight', { default: null, type: [String, null] })
const hover = defineModel('hover', { default: null, type: [Boolean, null] })
const color = defineModel('color', { default: 'white', type: [String, null] })

const emits = defineEmits(['clickedMetaLeft'])
</script>

<template>
  <div class="header-main" :class="{ white: color === 'white', grey: color === 'grey' }">
    <div
      class="meta-left"
      :class="{ 'hover-enabled': hover === true }"
      @click="emits('clickedMetaLeft')"
    >
      <div v-if="icon || $slots.icon" class="header-icon">
        <iconElement :name="icon" :google="true" :filled="true" />
        <slot name="icon"></slot>
      </div>
      <div
        v-if="name || $slots.name"
        class="header-name"
        :class="{
          bold: weight === 'bold',
          h3: size === 'h3',
          h4: size === 'h4'
        }"
      >
        {{ name }}
        <slot name="header"></slot>
      </div>
    </div>
    <div class="meta-right">
      <slot name="meta-right"></slot>
    </div>
  </div>
</template>

<style scoped>
@import url('../assets/base.css');
.header-main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
}
.white {
  color: var(--hh-c-text-header);
}
.grey {
  color: var(--vt-c-text-dark-2);
}
.meta-right {
  display: flex;
  flex-direction: row;
  gap: 5px;
}
.meta-left {
  display: flex;
  flex-direction: row;
  gap: 5px;
}
.hover-enabled:hover {
  color: var(--color-text);
  cursor: pointer;
}
</style>
