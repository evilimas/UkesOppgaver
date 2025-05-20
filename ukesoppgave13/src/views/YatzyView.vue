<script setup lang="ts">
import { ref } from 'vue';
import Scoreboard from '@/components/Scoreboard.vue';
import Dice from '@/components/Dice.vue';
import Player from '@/components/Player.vue';
// import type { Die } from "./yatzyLogic";
import { useScoreboardStore } from '@/stores/useScoreboardStore';
import { useDiceStore } from '@/stores/useDiceStore';

const $store = useScoreboardStore();

</script>

<template>
  <div id="game">
    <h1>Yatzy</h1>
    
    <Dice />
    <div>
      <Scoreboard
        v-for="i in $store.playerCount"
        :key="i"
        :title="'Player ' + i"
      ></Scoreboard>
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
