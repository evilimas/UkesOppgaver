import { ref, computed, reactive, watch } from 'vue';
import { defineStore } from 'pinia';

import {
  scoreFunctions,
  scoreboardFunctions,
  emptyScoreboard,
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
  const nextTurn = (combination: string) => {
    placeScore(combination);
    // console.log('scoreplaced', scoreBoards[activePlayer.value - 1][combination]);
    // console.log(combination);

    if (activePlayer.value < players.value) {
      activePlayer.value++;
    } else {
      activePlayer.value = 1;
    }
    throwCount.value = 3;
    holdDie.value = new Array(5).fill(false);
    dice.value = [2, 3, 4, 5, 6];
  };
  const placeScore = (combination: string) => {
    let combo = combination as YatzyCombination;
    scoreBoards[activePlayer.value - 1][combo] = scoreFunctions[combo](
      dice.value.filter((d): d is Die => d !== null)
    );
  };

  const allBoardScores = computed(() => {
    return scoreBoards.map((scoreBoard) => ({
      sum: scoreboardFunctions.sum(scoreBoard),
      bonus: scoreboardFunctions.bonus(scoreBoard),
      total: scoreboardFunctions.totalSum(scoreBoard),
    }));
  });

  const scoreBoards = reactive<Scoreboard[]>(
    Array.from({ length: Math.min(players.value, 4) }, emptyScoreboard)
  );

  watch(players, (newVal) => {
    scoreBoards.splice(
      0,
      scoreBoards.length,
      ...Array.from({ length: Math.min(newVal, 4) }, emptyScoreboard)
    );
  });

  // const scoreTable = reactive<number[]>();

  //   Dice store

  const diceChars = '⚀⚁⚂⚃⚄⚅';
  const dice = ref<(Die | null)[]>([null, null, null, null, null]);
  // const dice = ref<Die[]>([1 2, 3, 4, 5]);
  const holdDie = ref<boolean[]>(new Array(5).fill(false));
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
      value: die || null,
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
    allBoardScores,
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
