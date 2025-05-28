<script setup lang="ts">
interface Props {
  gameStarted: boolean;
  players: number;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  player: ["increase" | "decrease"];
  startGame: [];
  reStartGame: [];
}>();
</script>
<template>
  <div v-if="!gameStarted" id="Player">
    <h3>Spillere: {{ players }}</h3>
    <button :disabled="players >= 4" @click="emit('player', 'increase')">+</button>
    <button :disabled="players <= 1" @click="emit('player', 'decrease')">-</button>
    <button @click="emit('startGame')">Start Spill</button>
  </div>
  <button v-if="gameStarted" @click="emit('reStartGame')">Restart Spill</button>
</template>
<style scoped></style>
