<script setup lang="ts">
import { ref, computed } from "vue";
import { yatzyStore } from "@/stores/yatzyStore";
import { uiLabels } from "../yatzyLogic";

const scores = yatzyStore();
scores.scoreBoards[0].yatzy = 50;
scores.scoreBoards[1].fours = 50;
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Kombinasjon</th>
        <th>Player 1</th>
        <th>Player 2</th>
        <th>Player 3</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, combination) in uiLabels" :key="combination">
        <td>{{ value }}</td>
        <td v-for="(scoreBoard, index) of scores.scoreBoards" :key="index">
          {{ scoreBoard[combination] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  flex-direction: column;
  justify-content: space-between;
}

table,
tr,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 4px;
}
</style>
