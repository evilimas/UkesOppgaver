<script setup lang="ts">
import { ref } from "vue";
import Scoreboard from "@/components/Scoreboard.vue";
import Dice from "@/components/Dice.vue";
import Player from "@/components/Player.vue";
</script>

<template>
  <div id="game">
    <h1>Yatzy</h1>
    <div>
      <Player></Player>
    </div>
    <div><Dice /></div>
    <div>
      <Scoreboard />
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
