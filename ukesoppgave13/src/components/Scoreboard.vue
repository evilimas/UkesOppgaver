<script setup lang="ts">
import { ref, computed } from 'vue';
import { useScoreboardStore } from '@/stores/useScoreboardStore';
import { useDiceStore } from '@/stores/useDiceStore';

const $scoreStore = useScoreboardStore();
const $diceStore = useDiceStore();
</script>

<template>
  <fieldset>
    <legend>Scoreboard </legend>
    <div class="scoreboard" v-for="(combination) of $scoreStore.board">
    <button >{{ combination.name }}</button> 
    <span>{{ combination.score }}</span>
    </div>
    {{ $diceStore.throwCount }}
  </fieldset>
</template>

<style scoped>
.scoreboard {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
