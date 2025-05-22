import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

import { scoreFunctions, scoreboardFunctions, emptyScoreboard } from '../yatzyLogic';
import type { Die, DieFrequencyTable, YatzyCombination, Scoreboard } from '../yatzyLogic';

export const yatzyStore = defineStore('scoreBoard', () => {
    // const players = ref<number>(2);
    const players = ref<number>(1);
    
    const gameStarted = ref<boolean>(false);
    // const turn = ...
    // ideelt sett skal komponentene kun lese de reaktive variablene
    // - og bruke dem til rendering
    // - og at endring skjer via actions
    const nextTurn = () => { };
    const scoreBoards = computed(() =>
        Array.from({ length: Math.min(players.value, 4) }, emptyScoreboard)
    );
   
    return {
        gameStarted,
        players,
        nextTurn,
        scoreBoards
    }
});