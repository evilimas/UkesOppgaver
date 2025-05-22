// import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'

// export const useScoreboardStore = defineStore('scoreBoard', () => {
//   const board: string[] = 
//     ['Aces', 'Twos', 'Threes', 'Fours', 'Fives', 'Sixes', 'One Pair', 'Two Pair', 'Three of a Kind', 'Four of a Kind', 'Full House', 'Small Straight', 'Large Straight', 'Yahtzee', 'Chance'];
//   const scores = ref<number[]>(Array(15).fill(0))
//   const getUpperScore = () => scores.value.slice(0, 6).reduce((a, b) => a + b, 0);
//   const upperScore = computed(getUpperScore)
//   const totalScore = computed(() => {scores.value.slice(7, 15).reduce((a, b) => a + b, 0) + bonusScore.value + upperScore.value})
//   const bonusScore = computed(() => getUpperScore() >= 63 ? 50 : 0);
//   //const createScoreArray = () => { playrId.value = 0 : [scores.value] } // { playerNr: [scores.value] }

//   const scoreTable = computed(()=>{
    
//   });

//   const isGameOver = ref<boolean>(false)
//   const isGameWon = ref<boolean>(false)
//   const isGameLost = ref<boolean>(false)

//   return {
//     board,
//     scores,
//     isGameOver,
//     isGameWon,
//     isGameLost,
//     upperScore,
//     totalScore,
//     bonusScore,
//   }
// });