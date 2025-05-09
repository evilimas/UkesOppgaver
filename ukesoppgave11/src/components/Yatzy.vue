<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Dice, rollDie } from '../gameLogic';
import { findCombos } from '../gameLogic';

const rollDie = () => Math.floor(Math.random() * 6) + 1;
const rollDice = (n: number): Dice => Array.from({ length: n }, rollDie);
const numberOfRolls = ref<number>(3);
const currentDice = ref<number[]>([]);
const NumberOfDice = ref<number>(5);
const savedDice = ref<number[]>([]);
const mostPoints = ref<number[]>([]);
const selectedIndex = ref<number[]>([]);
const points = ref<number>(0);

const addtosavedDice = (die) => {
  savedDice.value.push(die)
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
    <div v-if="numberOfRolls > 0">Antall Kast igjen {{ numberOfRolls }}</div>
    <div v-else>Du har brukt dine kast</div>
    <p v-for="(die, index) of currentDice" :key="index">
      <Button v-model="currentDice[index].value" @click="addtosavedDice(die), NumberOfDice--">Legg til {{ die }}</Button>
    </p>
    <span>Valgte terninger {{ savedDice }}</span>
    <!-- <button @click="">Spar terninger</button> -->
    <br />
    <button @click="findCombos(savedDice)">Finn kombo med mest poeng</button> 
    <p v-for="(die, index) of savedDice" :key="index">{{ die }}</p>
    <p>Dine poeng {{ points.value }}</p> 
  </div>
</template>

<style scoped></style>
