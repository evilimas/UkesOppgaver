import { ref, computed, hydrateOnIdle } from 'vue'
import { defineStore } from 'pinia'

export const useScoreboardStore = defineStore('scoreBoard', () => {
  const board = ref<{ name: string, score: number }[]>(
    [
      { name: 'ones', score: 0 },
      { name: 'twos', score: 0 },
      { name: 'threes', score: 0 },
      { name: 'fours', score: 0 },
      { name: 'fives', score: 0 },
      { name: 'sixes', score: 0 },
      { name: 'threeOfAKind', score: 0 },
      { name: 'fourOfAKind', score: 0 },
      { name: 'fullHouse', score: 0 },
      { name: 'smallStraight', score: 0 },
      { name: 'largeStraight', score: 0 },
      { name: 'yahtzee', score: 0 },
      { name: 'chance', score: 0 },
      { name: 'bonus', score: 0 },
      { name: 'total', score: 0 },
      { name: 'totalUpper', score: 0 },
      { name: 'totalLower', score: 0 },
      { name: 'totalGame', score: 0 }
    ]);
  const isGameOver = ref<boolean>(false)
  const isGameWon = ref<boolean>(false)
  const isGameLost = ref<boolean>(false)

  return {
    board,
    isGameOver,
    isGameWon,
    isGameLost,
  }
});