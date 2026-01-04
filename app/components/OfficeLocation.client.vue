<script setup lang="ts">
const style = "https://api.maptiler.com/maps/streets-v2/style.json?key=2v7CQKvPi78UDsoWcxUv";
const center = [7.441120631728559, 10.536754626700217];
const zoom = 17;
</script>

<template>
  <MglMap
    :map-style="style"
    :center="center"
    height="10"
    :zoom="zoom"
  >
    <mgl-marker :coordinates="center">
      <template #marker>
        <div :style="{ width: '30px', height: '30px' }">
          <img src="/musnaj2.png" alt="musnaj">
        </div>
      </template>
    </mgl-marker>
    <MglNavigationControl />
  </MglMap>
</template>

<style>
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
