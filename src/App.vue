<script setup lang="ts">
  import { ref, watchEffect } from 'vue'
  import { useLeaflet } from './leaflet/leaflet'

  const map = ref<HTMLDivElement>(null)
  watchEffect(() => {
    if (map.value) {
      useLeaflet(map.value);
    }
  })
</script>

<template>
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
