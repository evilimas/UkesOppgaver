import { ref, computed, reactive } from 'vue';
import { defineStore } from 'pinia';

import {
  scoreFunctions,
  scoreboardFunctions,
  emptyScoreboard,
  createFrequencyTable,
} from '../yatzyLogic';
import type {
  Die,
  DieFrequencyTable,
  YatzyCombination,
  Scoreboard,
} from '../yatzyLogic';

export const yatzyStore = defineStore('scoreBoard', () => {
  const players = ref<number>(4);

  const gameStarted = ref<boolean>(false);
  const activePlayer = ref<number>(1);
  // const turn = ...
  // ideelt sett skal komponentene kun lese de reaktive variablene
  // - og bruke dem til rendering
  // - og at endring skjer via actions
  const nextTurn = () => {
    if (activePlayer.value < players.value) {
      activePlayer.value++;
    } else {
      activePlayer.value = 1;
    }
  };
  const placeScore = (dice: Die[]) => {
    const scoreFunction = scoreFunctions[dice];
    const frequencyTable: DieFrequencyTable = createFrequencyTable(dice);
    const score = scoreFunction(frequencyTable);
    if (scoreBoard[dice] === null) {
      scoreBoard[dice] = score;
    }
  };
  const scoreBoards = computed(() =>
    Array.from({ length: Math.min(players.value, 4) }, emptyScoreboard)
  );

  return {
    gameStarted,
    players,
    nextTurn,
    scoreBoards,
    activePlayer,
  };
});
