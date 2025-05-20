<script setup lang="ts">
import { ref, computed } from 'vue';
// import {
//    scoreFunctions,
//       scoreboardFunctions,
//   emptyScoreboard,
// } from '../yatzyLogic';
// import type { Die, Scoreboard, YatzyCombination } from '../yatzyLogic';
import { useScoreboardStore } from '@/stores/useScoreboardStore';



// const props = defineProps<{ dice: Die[] }>();
// const scoreboard = ref<Scoreboard>(emptyScoreboard());
const store = useScoreboardStore();
// const sum = computed(() => scoreboardFunctions.sum(store.sum));
// // const bonus = computed(() => scoreboardFunctions.bonus(store.bonus));
// const total = computed(() => scoreboardFunctions.totalSum(scoreboard.value));

// const select = (combinationStr: string) => {
//   const combination = combinationStr as YatzyCombination;
//   const scoreFunction = scoreFunctions[combination];
//   const points = scoreFunction(props.dice);
//   scoreboard.value[combination] = points;
// };
</script>

<template>
  <fieldset>
    <legend>Scoreboard {{ title }}</legend>
    <!-- <div v-for="(combination, index) in store.$state" :key="index"></div> -->
    <!-- <div v-for="(score, combination) of scoreboard" :key="combination">
      <button @click="select(combination)">
        {{ combination }}
        {{ score }}
      </button>
    </div>
    <div>
      <button disabled>Sum {{ sum }}</button>
    </div>
    <div>
      <button disabled>Bonus {{ bonus }}</button>
    </div>
    <div>
      <button disabled>Totalsum {{ total }}</button>
    </div> -->
  </fieldset>
</template>

<style scoped></style>
