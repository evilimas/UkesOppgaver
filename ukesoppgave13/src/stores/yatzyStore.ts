import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

import { scoreFunctions, scoreboardFunctions, emptyScoreboard } from '../yatzyLogic';
import type { Die, DieFrequencyTable, YatzyCombination, Scoreboard } from '../yatzyLogic';

export const yatzyStore = defineStore('scoreBoard', () => {

    // const turn = ...
    // ideelt sett skal komponentene kun lese de reaktive variablene
    // - og bruke dem til rendering
    // - og at endring skjer via actions
    const nextTurn = () => { };
    const players = ref(3);
    const scoreBoardsRaw: Scoreboard[] =
        Array.from({ length: players.value }, emptyScoreboard);
    const scoreBoards = reactive(scoreBoardsRaw);

    return {
        nextTurn,
        scoreBoards
    }
});