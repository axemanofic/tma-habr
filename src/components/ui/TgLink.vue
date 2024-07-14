<script setup lang="ts">
import WebApp from '@twa-dev/sdk';


interface ILink {
    href: string
}

const props = defineProps<ILink>()

function clickLink() {
    WebApp.openLink(props.href, {try_instant_view: false})
}
</script>

<template>
    <button class="link" @click="clickLink">
        <slot></slot>
    </button>
</template>

<style lang="sass">
.link
    color: var(--tg-theme-link-color)
    background-color: transparent
    padding: 0
</style>