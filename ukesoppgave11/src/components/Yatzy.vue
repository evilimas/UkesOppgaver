<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Dice, rollDie, findCombos } from '../gameLogic';

const rollDie = () => Math.floor(Math.random() * 6) + 1;
const rollDice = (n: number): Dice => Array.from({ length: n }, rollDie);
const numberOfRolls = ref<number>(3);
const currentDice = ref<number[]>([]);
const NumberOfDice = ref<number>(5);
const savedDice = ref<number[]>([]);
const mostPoints = ref<number[]>([]);
const selectedIndex = ref<number[]>([]);
const points = ref<number>(0);
const checkPoints = () => savedDice.reduce((a, b) => a + b, 0)
const selectedDice = computed(() => {
  selectedIndex.value!.map((index) => savedDice.value[index]);
});

const addtosavedDice = (die) => {
  savedDice.value.push(die)
  // currentDice.value = currentDice.value.filter((item) => item !== die);
  // return currentDice.map((index) => savedDice[index]);
  // currentDice.value.unshift();
  // savedDice.value.push(currentDice.value[0]);
};
const removeFromCurrentDice = (index) => {
  currentDice.value = currentDice.value.splice(1, index);
  NumberOfDice.value = currentDice.value.length;
};
function updateNumberOfRolls() {
  currentDice.value = rollDice(NumberOfDice.value);
  numberOfRolls.value--;
}
</script>

<template>
  <div class="app">
    <h1>Yatzy</h1>
    <h3>Spill Yatzy med oss!</h3>
    <button @click="updateNumberOfRolls" :disabled="numberOfRolls == 0">
      Kast terninger
    </button>
    <div v-if="numberOfRolls > 0">{{ numberOfRolls }}</div>
    <div v-else>Du har brukt dine kast</div>
    <p v-for="(die, index) of currentDice" :key="index">
      <input type="checkbox" @click="addtosavedDice(die),removeFromCurrentDice(die)"/>{{ die }}
    </p>
    <span>{{ savedDice }}</span>
    <span>{{ currentDice }}</span>
    <!-- <button @click="">Spar terninger</button> -->
    <br />
    <button @click="findCombos()">Finn kombo med mest poeng</button> 
    <p v-for="(die, index) of savedDice" :key="index">{{ die }}</p>
    <p>{{ points.value }}</p> 
  </div>
</template>

<style scoped></style>
