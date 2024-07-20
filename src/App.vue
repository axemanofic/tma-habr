<script setup lang="ts">
import WebApp from "@twa-dev/sdk";
import Anonim from "@/pages/Anonim.vue";
import Auth from "@/pages/Auth.vue";

WebApp.expand();
const user = WebApp.initDataUnsafe.user;
</script>

<template>
  <Auth v-if="user" :user="user" />
  <Anonim v-else/>
</template>

<style lang="sass" scoped>
</style>
