<script setup lang="ts">
import { usePlayerStore } from '@/stores/usePlayerStore';
const $store = usePlayerStore();
</script>
<template>
  <div id="Player">
    <h3 v-for="player in $store.playerNumber">Spiller: {{ player }}</h3>
  </div>
  </template>
<style scoped> 
</style>