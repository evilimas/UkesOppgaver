<script setup lang="ts">
import { ref } from 'vue';
import type { Die } from '../yatzyLogic';

// defineProps<{ msg: string }>()

const emit = defineEmits<{
  (e: 'diceRolled', value: Die[]): void;
}>();

const dice = ref<Die[]>([1, 2, 3, 4, 5]);
const diceChars = ' ⚀⚁⚂⚃⚄⚅';
const roll = () => {
  for (let i = 0; i < 5; i++) {
    dice.value[i] = Math.ceil(Math.random() * 6) as Die;
  }
  emit('diceRolled', dice.value);
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
