<script setup lang="ts">
import { computed, ref } from 'vue';
import { useScoreboardStore } from '@/stores/useScoreboardStore';
import { useDiceStore } from '@/stores/useDiceStore';

import type { Die } from '../yatzyLogic';

// defineProps<{ msg: string }>()
const diceStore = useDiceStore();

const dice = diceStore.dice;
const diceChars = ' ⚀⚁⚂⚃⚄⚅';
const roll = () => {
  for (let i = 0; i < 5; i++) {
    dice[i] = Math.ceil(Math.random() * 6) as Die;
  }
  diceStore.throwCount--;
};

const trillText = computed(() =>
  diceStore.throwCount <= 0 ? 'Ferdig' : 'Ganger igjen'
);
</script>

<template>
  <fieldset>
    <legend>Terninger</legend>
    <button @click="roll" :disabled="diceStore.throwCount <= 0">Trill</button>
    <div>{{ diceStore.throwCount }}</div>
    <h3>{{ trillText }}</h3>

    <div>
      <span v-for="(dieValue, index) of diceStore.dice" :key="index">
        {{ diceChars[dieValue] }}
      </span>
    </div>
  </fieldset>
</template>

<style scoped>
span {
  font-size: 300%;
}
</style>
