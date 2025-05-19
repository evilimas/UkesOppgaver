import { defineStore } from 'pinia'
export const useDiceStore = defineStore('dice', {
    state: () => ({
        die: 1,
        dice: [1, 2, 3, 4, 5],
        isLocked: [false, false, false, false, false],
        throwCount: 3,
    }),
    actions: {
        holdDie(dieIndex:  number) {
            this.isLocked[dieIndex] = !this.isLocked[dieIndex]
        },
        throwDice() {
            for (let i = 0; i < this.dice.length; i++) {
                if (!this.isLocked[i]) {
                    this.dice[i] = Math.floor(Math.random() * 6) + 1
                }
            }
        },
        resetDice() {
            this.dice = [1, 2, 3, 4, 5]
            this.isLocked = [false, false, false, false, false]
        },},
    getters: {
        getDice: (state) => {
            return state.dice
        }
    }
})
// import { ref, computed, hydrateOnIdle } from 'vue'