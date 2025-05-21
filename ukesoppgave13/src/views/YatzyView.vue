
<script setup lang="ts">
import { ref } from 'vue';
import Scoreboard from '@/components/Scoreboard.vue';
import Dice from '@/components/Dice.vue';
import Player from '@/components/Player.vue';
import { usePlayerStore } from '@/stores/usePlayerStore';

const $store = usePlayerStore();
const playersNr = ref($store.playerNumber);
</script>

<template>
  <div id="game">
    <h1>Yatzy</h1>
    <Player></Player>
     <Dice />
    <div>
      <Scoreboard/>
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



