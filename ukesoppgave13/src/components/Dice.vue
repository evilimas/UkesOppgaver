<script setup lang="ts">
import { computed, ref } from 'vue';
import { yatzyStore } from '@/stores/yatzyStore';
import type { Die } from '../yatzyLogic';

// defineProps<{ msg: string }>()

const store = yatzyStore();

const trillText = computed(() =>
  store.throwCount <= 0 ? 'Ferdig' : 'Ganger igjen'
);
</script>

<template>
  <fieldset>
    <legend>Spiller: {{ store.activePlayer }}</legend>
    <div v-show="store.gameStarted">
      <button @click="store.throwDice()" :disabled="store.throwCount <= 0">
        Trill terninger
      </button>
      <div>{{ store.throwCount }} {{ trillText }}</div>

      <div
        class="dice"
        style="display: flex"
        :disabled="store.throwCount === 3"
      >
        <span v-for="dieObject of store.diceObjects" :key="dieObject.index">
          <div :style="dieObject.style" @click="store.flip(dieObject.index)">
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
    <div v-if="store.gameOver">
      <h2>Spillet er over!</h2>
      <h3>{{ store.winner() }}</h3>
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
fieldset {
  height: 15vh;
  width: 23vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
