<script setup lang="ts">

interface ISection {
  header?: string
}

const props = defineProps<ISection>();
</script>

<template>
  <div class="section">
    <p v-if="props.header" class="section-header">
      {{ props.header }}
    </p>
    <div class="section-body">
      <slot />
    </div>
  </div>
</template>

<style lang="sass">
.section-header
  color: var(--tg-theme-section-header-text-color)
  font-size: medium
  padding: 5px

.section-body
  background-color: var(--tg-theme-section-bg-color)
  display: flex
  flex-direction: column
  border-radius: 10px
  overflow: hidden
  padding: 10px
</style>
