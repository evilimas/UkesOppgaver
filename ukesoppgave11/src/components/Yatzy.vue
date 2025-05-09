<script setup lang="ts">
import { ref, computed } from 'vue';

const rollDie = () => Math.floor(Math.random() * 6) + 1;
const rollDice = (n: number): Dice => Array.from({ length: n }, rollDie);
const numberOfRolls = ref<number>(3);
const currentDice = ref<number[]>([]);
const NumberOfDice = ref<number>(5);
const savedDice = ref<number[]>([]);
const mostPoints = ref<number[]>([]);
const selectedIndex = ref<number[]>([]);
const points = ref<number>({
  one: 0,
  two: 0,
  three: 0,
  four: 0,
  five: 0,
  six: 0
});

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
    <h1>Yatzy Solitaire</h1>
    <h3>Spill Yatzy alene!</h3>
    <button @click="updateNumberOfRolls" :disabled="numberOfRolls == 0">
      Kast terninger
    </button>
    <div v-if="numberOfRolls > 0">Antall Kast igjen {{ numberOfRolls }}</div>
    <div v-else>Du har brukt dine kast</div>
    <p v-for="(die, index) of currentDice" :key="index">
      <Button v-model="currentDice[index].value" @click="addtosavedDice(die), NumberOfDice--">Legg til {{ die
        }}</Button>
    </p>
    <span>Valgte terninger {{ savedDice }}</span>
    <!-- <button @click="">Spar terninger</button> -->
    <br />
    <button @click="findCombos(savedDice)">Finn kombo med mest poeng</button>

    <table>
      <tr>
        <th>Spill</th>
        <th>Poeng</th>
      </tr>
      <tr>
        <td>Enere</td>
        <td>{{ points.one }}</td>
      </tr>
      <tr>
        <td>Toere</td>
        <td>{{ points.one }}</td>
      </tr>
      <tr>
        <td>Trere</td>
        <td>{{ points.one }}</td>
      </tr>
      <tr>
        <td>Firere</td>
        <td>{{ points.one }}</td>
      </tr>
      <tr>
        <td>Femmere</td>
        <td>{{ points.one }}</td>
      </tr>
      <tr>
        <td>Seksere</td>
        <td>{{ points.one }}</td>
      </tr>
      <tr>
        <td>Sum</td>
        <td>{{ points.sum }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>

table {
  border: 2px solid gold;
  width: 50%;
}
</style>
