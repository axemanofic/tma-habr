<script setup lang="ts">
import WebApp from "@twa-dev/sdk";
import UserInfo from "@/components/blocks/UserInfo.vue";
import About from "@/components/blocks/About.vue";
import { PopupButton, PopupParams } from "@twa-dev/types";

WebApp.expand();
const user = WebApp.initDataUnsafe.user;

const buttons: PopupButton[] = [
  {
    type: "ok",
  },
  {
    type: "destructive",
    text: "Text Button",
  },
];

const popup: PopupParams = {
  title: "Модалка",
  message: "Сообщение внутри модалки",
  buttons: buttons,
};

WebApp.showPopup(popup, (id) => {
  console.log(id);
});
</script>

<template>
  <UserInfo :user="user" />
  <About />
</template>

<style scoped></style>
