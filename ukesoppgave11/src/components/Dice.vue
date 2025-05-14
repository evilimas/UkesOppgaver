<script setup lang="ts">
import { ref } from 'vue';
import type { Die } from '../yatzyLogic';

// defineProps<{ msg: string }>()

const dice = ref<Die[]>([1, 2, 3, 4, 5]);
const diceChars = ' ⚀⚁⚂⚃⚄⚅';
const roll = () => {
  dice.value.length = 0;
  for (let i = 0; i < 5; i++) {
    dice.value.push(Math.ceil(Math.random() * 6) as Die);
  }
};
</script>

<template>
  <fieldset>
    <legend>Terninger</legend>
    <button @click="roll">Trill</button>
    <div>
      <span v-for="(dieValue, index) of dice" :key="index">
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
