<script setup>
const icon = defineModel('icon', { default: null, type: [String, null] })
const name = defineModel('name', { default: null, type: [String, null] })
const size = defineModel('size', { default: null, type: [String, null] })
const weight = defineModel('weight', { default: null, type: [String, null] })
</script>

<template>
    <div class="header-main">
        <div class="meta-left">
            <div
                v-if="icon || $slots.icon"
                class="header-icon"
            >
            <!-- TODO: replace with iconElement -->
                {{ icon }}
                <slot name="icon"></slot>
            </div>
            <div
                v-if="name || $slots.name"
                class="header-name"
                :class="{
                    'bold': weight === 'bold',
                    'h3': size === 'h3'
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
.header-main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
</style>