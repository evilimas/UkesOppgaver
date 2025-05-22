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
    placeScore();
  };
  const placeScore = () => {};
  const scoreBoards = reactive<Scoreboard[]>(
    Array.from({ length: Math.min(players.value, 4) }, emptyScoreboard)
  );

  //   Dice store

  const diceChars = '⚀⚁⚂⚃⚄⚅';
  const dice = ref<Die[]>([1, 2, 3, 4, 5]);
  const holdDie = ref<boolean[]>(new Array(5).fill(false));
  // const holdDie = ref<boolean[]>([false, false, false, false, false]);
  const dieColor = ref<string[]>(['black', 'black', 'black', 'black', 'black']);
  const throwCount = ref(3);
  const throwDice = () => {
    for (let i = 0; i < dice.value.length; i++) {
      if (holdDie.value[i]) {
        continue;
      }
      dice.value[i] = Math.floor(Math.random() * 6 + 1) as Die;
    }
    throwCount.value--;
  };

  const dieStyle = (index: number) => {
    const isSelected = holdDie.value[index];
    return {
      background: isSelected ? 'lightblue' : 'black',
      color: isSelected ? 'black' : 'white',
    };
  };

  const flip = (index: number) => {
    holdDie.value[index] = !holdDie.value[index];
  };

  const diceObjects = computed(() =>
    dice.value.map((die: Die, index: number) => ({
      value: die,
      index: index,
      char: diceChars[die - 1],
      style: dieStyle(index),
    }))
  );

  return {
    gameStarted,
    players,
    nextTurn,
    scoreBoards,
    activePlayer,
    placeScore,
    // Dice store
    dieColor,
    holdDie,
    dice,
    diceChars,
    throwCount,
    throwDice,
    flip,
    dieStyle,
    diceObjects,
  };
});
