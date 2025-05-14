<script setup lang="ts">
import { ref } from 'vue';
import { scoreFunctions } from '../yatzyLogic';
import type { Die, YatzyCombination } from '../yatzyLogic';

interface Score {
  combination: string;
  points: number;
}
const dice: Die[] = [1, 1, 2, 2, 3];
// defineProps<{ msg: string }>()
const scoreStart: Score[] = Object.keys(scoreFunctions).map((combination) => ({
  combination,
  points: 0,
}));
const scores = ref<Score[]>(scoreStart);

const select = (combination: string) => {
  const scoreFunction = scoreFunctions[combination];
  const points = scoreFunction(dice);
  const combinationScore = scores.find(
    (s: Score) => s.combination == combination
  );
  combinationScore.points = points;
};
</script>

<template>
  <fieldset>
    <legend>Scoreboard</legend>
    <div v-for="(score, index) of scores" :key="index">
      <button @click="select(score.combination)">
        {{ score.combination }}
        {{ score.points }}
      </button>
    </div>
  </fieldset>
</template>

<style scoped></style>
