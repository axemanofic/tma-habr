<script setup lang="ts">
import UserInfo from "@/components/blocks/UserInfo.vue";
import About from "@/components/blocks/About.vue";
import TgLogo from "@/components/ui/TgLogo.vue";
import { WebApp, WebAppUser } from "@twa-dev/types";

interface IUser {
  user: WebAppUser
}

const props = defineProps<IUser> ()
</script>

<template>
  <TgLogo />
  <UserInfo :user="props.user" />
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
