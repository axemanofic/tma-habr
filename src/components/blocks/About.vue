<script setup lang="ts">
import TgLink from "@/components/ui/TgLink.vue";

const link = "https://github.com/axemanofic/tg-mini-app-playground";
</script>

<template>
  <div class="about">
    <p>Made with love ❤</p>
    <TgLink :href="link">Learn More</TgLink>
  </div>
</template>

<style lang="sass">
.about
    font-size: medium
    text-align: center
    color: var(--tg-theme-hint-color)
    position: absolute
    bottom: 0
    margin: 0 0 20px 0
</style>
