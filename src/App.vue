<script setup lang="ts">
  import { ref, watchEffect } from 'vue'
  import { useWizardingWorld } from './game/wizarding-world'
  import ActivationWall from './activation/ActivationWall.vue'

  const map = ref<HTMLDivElement>(null)
  watchEffect(() => {
    if (map.value) {
      useWizardingWorld(map.value);
    }
  })
</script>

<template>
  <ActivationWall></ActivationWall>
  <div id="map" ref="map" class="map"></div>
</template>

<style>
html, body, #app {
  height: 100%;
}
.map {
  width: 100%;
  height: 100%;
}
</style>
