<script setup lang="ts">
import { yatzyStore } from "../stores/yatzyStore";
const store = yatzyStore();

interface Props {
  gameStarted: boolean;
  players: number;
}

const props = defineProps<Props>();
</script>
<template>
  <div v-if="!store.gameStarted" id="Player">
    <h3>Spillere: {{ players }}</h3>
    <button :disabled="players >= 4" @click="store.players++" type="button">+</button>
    <button :disabled="store.players <= 1" @click="store.players--" type="button">-</button>
    <button @click="store.gameStarted = !store.gameStarted">Start Spill</button>
  </div>
</template>
<style scoped></style>
