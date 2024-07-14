<script setup lang="ts">
import WebApp from "@twa-dev/sdk";
import { WebAppUser } from "@twa-dev/types";
import { ref, Transition } from "vue";
import TgSection from "@/components/ui/TgSection.vue";

interface IUserInfo {
  user?: WebAppUser;
}

const props = defineProps<IUserInfo>();

const mainButton = WebApp.MainButton;

const isIdVisible = ref(false);

mainButton.setParams({ text: "Показать ID", is_visible: true });
mainButton.onClick(() => {
  isIdVisible.value = !isIdVisible.value;
  mainButton.isVisible = false;
});
</script>

<template>
  <div class="user-info">
    <TgSection header="Username">
      <div class="username">{{ props.user ? props.user.username : "Anonim" }}</div>
    </TgSection>
    <Transition type="animation">
      <TgSection header="User ID" v-if="user && isIdVisible">
        <p class="user_id">{{ props.user?.id }}</p>
      </TgSection>
    </Transition>
  </div>
</template>

<style lang="sass" scoped>
.username .user_id
  text-align: center

.user-info > *::not(last)
  margin-bottom: 10px


/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active
  transition: opacity 0.5s ease

.v-enter-from,
.v-leave-to
  opacity: 0

</style>
