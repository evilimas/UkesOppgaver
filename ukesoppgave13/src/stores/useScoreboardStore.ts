import { ref, computed, hydrateOnIdle } from 'vue'
import { defineStore } from 'pinia'

export const useScoreboardStore = defineStore('yathzeeBoard', {
  state: () => ({
    players: 1,
    
    sum: 0,
    bonus: 0,
    total: 0,
    ones: 0,
    twos: 0,
    threes: 0,
    fours: 0,
    fives: 0,
    sixes: 0,
    threeOfAKind: 0,
    fourOfAKind: 0,
    fullHouse: 0,
    smallStraight: 0,
    largeStraight: 0,
    chance: 0,
    yatzy: 0,
    isGameOver: false,
    isGameWon: false,
    isGameLost: false,
  }),
  // actions: () => {
  //   
  // }
})
