<script setup lang="ts">
import WebApp from "@twa-dev/sdk";
import UserInfo from "@/components/blocks/UserInfo.vue";
import About from "@/components/blocks/About.vue";

WebApp.expand();
const user = WebApp.initDataUnsafe.user;
</script>

<template>
  <img src="/src/assets/telegram.svg" alt="" />
  <UserInfo :user="user" />
  <About />
</template>

<style lang="sass" scoped>

img
  max-width: 30%
  max-height: 30%
  // animation: 3s infinite rotation

@keyframes rotation
  0%
    transform: rotate(0deg)
  50%
    transform: rotate(180deg)
  100%
    transform: rotate(360deg)
</style>
