import { defineStore } from 'pinia'
import { ref, computed } from 'vue';
import type { Die, DieFrequencyTable } from '../yatzyLogic';
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

    const dieStyle = (index: number) => {
        const isSelected = holdDie.value[index];
        return {
            background: isSelected ? 'lightblue' : 'black',
            color: isSelected ? 'black' : 'white'
        };
    }

    const flip = (index: number) => {
        holdDie.value[index] = !holdDie.value[index];
    }

    const diceObjects = computed(() => dice.value.map((die: Die, index: number) => ({
        value: die,
        index: index,
        char: diceChars[die-1],
        style: dieStyle(index)
    })))
    /*
      <span v-for="(dieValue, index) of $diceStore.dice" :key="index">
        <div
          :style="$diceStore.dieStyle(index)"
          @click="$diceStore.flip(index)">
          {{ $diceStore.diceChars[$diceStore.dice[index] - 1] }}
        </div>
      </span>
    */


    return {
        dieColor,
        holdDie,
        dice,
        diceChars,
        throwCount,
        throwDice,
        flip,
        dieStyle, 
        diceObjects
    }
})
// import { ref, computed, hydrateOnIdle } from 'vue'