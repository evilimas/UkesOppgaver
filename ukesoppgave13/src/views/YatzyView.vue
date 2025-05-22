<script setup lang="ts">
import { ref } from 'vue';
import Scoreboard from '@/components/Scoreboard.vue';
import Dice from '@/components/Dice.vue';
import Player from '@/components/Player.vue';
import { yatzyStore } from '@/stores/yatzyStore';

const store = yatzyStore();
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
