<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Dice, rollDie } from '../gameLogic';

const rollDie = () => Math.floor(Math.random() * 6) + 1;
const rollDice = (n: number): Dice => Array.from({ length: n }, rollDie);
const numberOfRolls = ref<number>(3);
const currentDice = ref<number[]>([]);
const NumberOfDice = ref<number>(7);
const savedDice = ref<number[]>([]);
const mostPoints = ref<number[]>([]);
const selectedIndex = ref<number[]>([]);

const selectedDice = computed(() => {
  selectedIndex.value!.map((index) => currentDice.value[index]);
});

const addtosavedDice = () => {
  // return currentDice.map((index) => savedDice[index]);
  // currentDice.value.unshift();
  // savedDice.value.push(currentDice.value[0]);
};

function updateNumberOfRolls() {
  currentDice.value = rollDice(6);
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
      <input type="checkbox" v-model="selectedIndex" :value="index" />{{ die }}
    </p>
    {{}}
    <!-- <button @click="">Spar terninger</button> -->
    <br />
    <!-- <button @click="checkPoints(savedDice)">Finn kombo med mest poeng</button> -->
    <p v-for="(die, index) of savedDice" :key="index">{{ die }}</p>
    <p>{{ mostPoints }}</p>
  </div>
</template>

<style scoped></style>
