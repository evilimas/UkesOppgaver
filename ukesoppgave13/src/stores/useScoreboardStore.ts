import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useScoreboardStore = defineStore('scoreBoard', () => {
  const board = ref<string[]>(
    ['Aces', 'Twos', 'Threes', 'Fours', 'Fives', 'Sixes', 'One Pair', 'Two Pair', 'Three of a Kind', 'Four of a Kind', 'Full House', 'Small Straight', 'Large Straight', 'Yahtzee', 'Chance']
  );
  const score = ref<number[]>(Array(15).fill(0))
  const upperScore = computed(() => score.value.slice(0, 6).reduce((a, b) => a + b, 0))
  const totalScore = computed(() => {score.value.slice(7, 15).reduce((a, b) => a + b, 0) + bonusScore.value + upperScore.value})
  const bonusScore = computed(() => {
    let bonus = 0
    if (score.value.slice(0, 6).reduce((a, b) => a + b, 0) >= 63) {
      bonus = 35
    }
    return bonus
  })

  const isGameOver = ref<boolean>(false)
  const isGameWon = ref<boolean>(false)
  const isGameLost = ref<boolean>(false)

  return {
    board,
    score,
    isGameOver,
    isGameWon,
    isGameLost,
    upperScore,
    totalScore,
    bonusScore,
  }
});