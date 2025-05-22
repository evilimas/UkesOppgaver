<script setup lang="ts">
import { computed, ref } from 'vue';
import { useScoreboardStore } from '@/stores/useScoreboardStore';
import { useDiceStore } from '@/stores/useDiceStore';
import { yatzyStore } from '@/stores/yatzyStore';
import type { Die } from '../yatzyLogic';

// defineProps<{ msg: string }>()
const $diceStore = useDiceStore();
const store = yatzyStore();

const trillText = computed(() =>
  $diceStore.throwCount <= 0 ? 'Ferdig' : 'Ganger igjen'
);
</script>

<template>
  <fieldset>
    <legend>Spiller: {{ store.activePlayer }}</legend>
    <div v-show="store.gameStarted">
      <button
        @click="$diceStore.throwDice()"
        :disabled="$diceStore.throwCount <= 0"
      >
        Trill
      </button>
      <div>{{ $diceStore.throwCount }} {{ trillText }}</div>

      <div class="dice" style="display: flex">
        <span
          v-for="dieObject of $diceStore.diceObjects"
          :key="dieObject.index"
        >
          <div
            :style="dieObject.style"
            @click="$diceStore.flip(dieObject.index)"
          >
            {{ dieObject.char }}
          </div>
        </span>
        <!-- <span v-for="(dieValue, index) of $diceStore.dice" :key="index">
          <div
            :style="$diceStore.dieStyle(index)"
            @click="$diceStore.flip(index)">
            {{ $diceStore.diceChars[$diceStore.dice[index] - 1] }}
          </div>
        </span> -->
      </div>
    </div>
  </fieldset>
</template>

<style scoped>
span {
  font-size: 300%;
  background: lightblue;
  line-height: 90%;
}
.dice {
  user-select: none;
  cursor: pointer;
}
</style>
