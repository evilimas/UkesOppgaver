<script setup lang="ts">
import { yatzyStore } from '@/stores/yatzyStore';
const store = yatzyStore();
</script>
<template>
  <div id="Player">
    <h3>Spillere: {{ store.players }}</h3>
    <button
      :disabled="store.players >= 4"
      @click="store.players++"
      type="button"
    >
      +
    </button>
    <button
      :disabled="store.players <= 1"
      @click="store.players--"
      type="button"
    >
      -
    </button>
    <button @click="store.gameStarted = !store.gameStarted">Start Spill</button>
  </div>
</template>
<style scoped>

</style>
