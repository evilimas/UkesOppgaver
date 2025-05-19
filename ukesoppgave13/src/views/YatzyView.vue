<script setup lang="ts">
import { ref } from "vue";
import Scoreboard from '@/components/Scoreboard.vue';
import Dice from '@/components/Dice.vue';
// import type { Die } from "./yatzyLogic";
import { useScoreboardStore } from '@/stores/useScoreboardStore';
import { useDiceStore } from '@/stores/useDiceStore';

const store = useScoreboardStore();
const diceStore = useDiceStore();
// const dice = ref<Die[]>([]);
// const handleDiceRolled = (rolledDice: Die[]) => {
//   dice.value = rolledDice;
// };
</script>

<template>
  <div id="game">
    <h1>Yatzy</h1>
    <h3>Spillere: {{ store.players }}</h3>
    <Dice />
    <div>
    <Scoreboard v-for="player of store.players"  :title="'Player ' + player"></Scoreboard>
  </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
