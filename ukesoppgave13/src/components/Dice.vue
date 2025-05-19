<script setup lang="ts">
import { ref } from 'vue';
import { useScoreboardStore} from '@/stores/useScoreboardStore';
import { useDiceStore } from '@/stores/useDiceStore';

// import type { Die } from '../yatzyLogic';

// defineProps<{ msg: string }>()
const diceStore = useDiceStore();
const emit = defineEmits<{
  (e: 'diceRolled', value: Die[]): void;
}>();

const dice = diceStore.dice;
const diceChars = ' ⚀⚁⚂⚃⚄⚅';
const roll = () => {
  for (let i = 0; i < 5; i++) {
    dice[i] = Math.ceil(Math.random() * 6) as Die;
  }
  diceStore.throwCount--;
  emit('diceRolled', dice);
};
</script>

<template>
  <fieldset>
    <legend>Terninger</legend>
    <button @click="roll">Trill</button>{{ diceStore.throwCount }}
    
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
