<script setup lang="ts">
import { ref, watch } from 'vue';
import Scoreboard from '@/components/Scoreboard.vue';
import Dice from '@/components/Dice.vue';
import Player from '@/components/Player.vue';
import WinnerModal from '@components/WinnerModal.vue';

import { yatzyStore } from '@/stores/yatzyStore';
const showWinnerModal = ref(false);
const store = yatzyStore();

watch(() => store.isGameFinished, (isFinished) => {
  if (isFinished) {
    showWinnerModal.value = true;
  }
});
const handleCloseModal = () => {
  showWinnerModal.value = false;
};
const handleNewGame = () => {
  store.resetGame();
  showWinnerModal.value = false;
};
</script>

<template>
  <div id="game">
    <h1>Det beste Yatzy-spillet!</h1>
    <!-- <div>
      <h2 v-for="(die, index) in store.diceChars" :key="index">
        {{ die }}
      </h2>
    </div> -->
    <div>
      <Player></Player>
    </div>
    <div><Dice /></div>
    <div>
      <Scoreboard :activePlayer="store.activePlayer" />
    </div>
    <WinnerModal
    :is-visible="showWinnerModal"
    :winner-text="store.winnerText"
    @close="handleCloseModal"
    @new-game="handleNewGame"
  />
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

#game {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
