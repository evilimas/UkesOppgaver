<script setup lang="ts">
import { usePlayerStore } from '@/stores/usePlayerStore';
const $store = usePlayerStore();
</script>
<template>
  <div id="Player">
    <h3 v-for="player in $store.playerNumber">Spillere: {{ player }}</h3>
    <button>+</button>
    <button>-</button>
  </div>
  </template>
<style scoped> 
</style>