<script setup lang="ts">
import { usePlayerStore } from '@/stores/usePlayerStore';
const $store = usePlayerStore();
$store.addPlayer('Spiller 1',1);
</script>
<template>
  <div id="Player">
    <h3 v-for="(player,index) of $store.players" :key="index">Klar: {{ player.playerName }}</h3>
  </div>
  </template>
<style scoped> 
</style>