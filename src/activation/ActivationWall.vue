<script setup lang="ts">
import { useVocalTrigger } from './vocal-trigger';

const OPEN_TRIGGER = "ich schwöre feierlich ich bin ein tunichtgut";
const CLOSE_TRIGGER = "missetat begangen"

const closed = useVocalTrigger(true, OPEN_TRIGGER, CLOSE_TRIGGER);
</script>

<template>
<div class="wall left" :class="{ closed: !closed }" />
<div class="wall right" :class="{ closed: !closed }" />
</template>

<style>
.wall {
  /* has to overlay the google map */
  z-index: 500;
}

.left {
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background-image: url('/img/wall_01.png'), url('/img/wall_back_01.png');
  background-repeat: no-repeat;
  background-size: contain, cover;
  background-position: right;
}

.left.closed {
  transition: transform 1s linear;
  transform-origin: left;
  transform: rotateY(90deg);
}
.right.closed {
  transition: transform 1s linear;
  transform-origin: right;
  transform: rotateY(90deg);
}

.right {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background-image: url('/img/wall_02.png'), url('/img/wall_back_02.png');
  background-repeat: no-repeat;
  background-size: contain, cover;
  background-position: left;
}
</style>