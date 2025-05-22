<script setup lang="ts">
import { ref, computed } from 'vue';
import { useScoreboardStore } from '@/stores/useScoreboardStore';
import { useDiceStore } from '@/stores/useDiceStore';
import { usePlayerStore } from '@/stores/usePlayerStore';

const $scoreStore = useScoreboardStore();
const $diceStore = useDiceStore();
const $store = usePlayerStore();
const playersNr = ref($store.playerNumber);

</script>

<template>
  <fieldset>
    <div class="board">
      <legend>Scoreboard </legend>
      <div class="combinations" v-for="(combination) in $scoreStore.board">
        <div>{{ combination }}</div>
        <!-- <span>{{ combination }}</span> -->
      </div>
      <div v-for="player in playersNr">
        <div class="player-score" v-for="(score) in $scoreStore.scores">
          <div>{{ score }}</div>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  flex-direction: column;
  justify-content: space-between;
}
</style>
