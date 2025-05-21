<script setup lang="ts">
import { computed, ref } from 'vue';
import { useScoreboardStore } from '@/stores/useScoreboardStore';
import { useDiceStore } from '@/stores/useDiceStore';

import type { Die } from '../yatzyLogic';

// defineProps<{ msg: string }>()
const $diceStore = useDiceStore();

const trillText = computed(() =>
  $diceStore.throwCount <= 0 ? 'Ferdig' : 'Ganger igjen'
);
</script>

<template>
  <fieldset>
    <legend>Terninger</legend>
    <button
      @click="$diceStore.throwDice()"
      :disabled="$diceStore.throwCount <= 0"
    >
      Trill
    </button>
    <div>{{ $diceStore.throwCount }}</div>
    <h3>{{ trillText }}</h3>

    <div class="dice" style="display: flex">
      <span v-for="(dieValue, index) of $diceStore.dice" :key="index">
        <div
          :style="{ background: $diceStore.holdDie[index] ? 'lightblue' : 'black' , color: $diceStore.holdDie[index] ? 'black' : 'white' }"
          @click="
            ($diceStore.holdDie[index] = !$diceStore.holdDie[index]),
              $diceStore.holdDieColor(index)
          "
        >
          {{ $diceStore.diceChars[$diceStore.dice[index] - 1] }}
        </div>
      </span>
    </div>
  </fieldset>
</template>

<style scoped>
span {
  font-size: 300%;
  background: lightblue;
}
.dice {
  cursor: pointer;
}

</style>
