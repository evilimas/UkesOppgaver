import { defineStore } from 'pinia'
import { ref } from 'vue';
import type { Die, DieFrequencyTable }  from '../yatzyLogic';
// import { createFrequencyTable } from '../yatzyLogic';
export const useDiceStore = defineStore('dice', () => {
    // const diceChars = ' ⚀⚁⚂⚃⚄⚅';
    const diceChars = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']
    const dice = ref<Die[]>([1, 2, 3, 4, 5]);
    const holdDie = ref<boolean[]>([false, false, false, false, false]);
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
    }
    const holdDieColor = (index: number) => {
        if (holdDie.value[index]) {
            dieColor.value[index] = 'red';
        } else {
            dieColor.value[index] = 'black';
        }
    }


    return {
        dieColor,
        holdDie,
        holdDieColor,
        dice,
        diceChars,
        throwCount,
        throwDice
    }
})
// import { ref, computed, hydrateOnIdle } from 'vue'