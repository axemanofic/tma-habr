<script setup lang="ts">
import WebApp from "@twa-dev/sdk";
import QrcodeVue from "qrcode.vue";
import TgLink from "../ui/TgLink.vue";
import TgSection from "../ui/TgSection.vue";

const value = "https://t.me/axemanofic";

const background_color = WebApp.themeParams.section_bg_color;
const foreground_color = WebApp.themeParams.text_color;
</script>

<template>
  <TgSection>
    <TgLink class="link-qr" :href="value">
      <QrcodeVue
        :value="value"
        render-as="svg"
        :background="background_color"
        :foreground="foreground_color"
        :margin="0"
      />
    </TgLink>
  </TgSection>
</template>

<style lang="sass">
.link-qr
    display: flex

</style>
