import { ref, computed, hydrateOnIdle } from 'vue'
import { defineStore } from 'pinia'

export const useScoreboardStore = defineStore('yathzeeBoard', {
  state: () => ({
    players: [{ playerName: "", playerNumber: 0 }], 
    ones: 0,
    twos: 0,
    threes: 0,
    fours: 0,
    fives: 0,
    sixes: 0,
    bonus: 0,
    sum: 0,
    onePair: 0,
    twoPair: 0,
    threeOfAKind: 0,
    fourOfAKind: 0,
    fullHouse: 0,
    smallStraight: 0,
    largeStraight: 0,
    chance: 0,
    yatzy: 0,
    total: 0,
    isGameOver: false,
    isGameWon: false,
    isGameLost: false,
  }),
  actions: () => {}
    // bonus: () => {
    //   if (this.sum >= 63) {
    //     this.bonus = 35
    //   } else {
    //     this.bonus = 0
    //   }
    // },
    // sum: () => {
    //   return 
    // },
})
