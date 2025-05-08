<script setup lang="ts">
import { ref, computed } from 'vue';
import { rollDice } from '../gameLogic';

const currentDice = ref<number[]>([]);
const NumberOfDice = ref<number>(7);
const savedDice = ref<number[]>([]);
const addtosavedDice = () => {
 currentDice.value.pop()
  savedDice.value.push(currentDice.value[0]);
};
</script>

<template>
  <div class="app">
    <h1>Yatzy</h1>
    <h3>Spill Yatzy med oss!</h3>
    <button @click="currentDice = rollDice(7)">Kast terninger </button>
    <p v-for="die,index of currentDice" :key=index><input type="checkbox">{{ die }}</p>
    <button @click="addtosavedDice()">Spar terninger</button>
  </div>
</template>

<style scoped>

</style>
