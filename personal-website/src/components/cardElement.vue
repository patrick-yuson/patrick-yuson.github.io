<script setup>
const header = defineModel('header', { default: null, type: [String, null] })
const content = defineModel('content', { default: null, type: [String, null] })
</script>

<template>
    <div class="card-main">
        <div v-if="header || $slots.header" class="card-header">
            {{ header }}
            <slot name="header"></slot>
        </div>
        <div v-if="content || $slots.content" class="card-content">
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
    padding: 20px;
    margin: 20px 0px 20px 0px;
    border-radius: var(--border-radius-main);
    box-shadow: 0px 5px 5px var(--hh-c-brown);
}
.card-header {
    margin-bottom: 20px;
    font-weight: bold;
}
</style>