<script setup lang="ts">
import type { Scoreboard } from "../yatzyLogic";
import { uiLabels } from "../yatzyLogic";
interface Props {
  players: number;
  activePlayer: number;
  scoreBoards: Scoreboard[];
  allBoardScores: { sum: number; bonus: number; total: number }[];
}
const props = defineProps<Props>();

const emit = defineEmits<{
  nextTurn: [string | null];
  placeScore: [string | null];
}>();
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Kombinasjon</th>
          <th
            v-for="player of players"
            :key="player"
            :style="{ background: activePlayer === player ? 'darkgreen' : '' }"
          >
            Spiller: {{ player }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, combination) in uiLabels" :key="combination">
          <td :id="combination">{{ value }}</td>
          <td
            v-for="(scoreBoard, index) of scoreBoards"
            :key="index"
            :id="combination"
            :class="{
              disabled: scoreBoard[combination] !== null || scoreBoard[combination] == 0,
            }"
            :style="{
              background: activePlayer === index + 1 ? 'darkblue' : '',
              cursor: scoreBoard[combination] !== null ? 'not-allowed' : 'pointer',
              opacity: scoreBoard[combination] !== null || scoreBoard[combination] == 0 ? 0.3 : 1,
            }"
            @click="emit('placeScore', scoreBoard[combination] === null ? combination : null)"
          >
            {{ scoreBoard[combination] }}
          </td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <th>----Poeng----</th>
          <th v-for="player of players" :key="player">Spiller: {{ player }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sum</td>
          <td v-for="(score, index) in allBoardScores" :key="index">
            {{ score.sum }}
          </td>
        </tr>
        <tr>
          <td>Bonus</td>
          <td v-for="(score, index) in allBoardScores" :key="index">
            {{ score.bonus }}
          </td>
        </tr>
        <tr>
          <td>Totalsum</td>
          <td v-for="(score, index) in allBoardScores" :key="index">
            {{ score.total }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table,
tr,
th,
td {
  border: 1px solid lightblue;
  border-collapse: collapse;
  padding: 4px;
}

.disabled {
  pointer-events: none;
  background-color: #f0f0f0 !important;
  color: #888;
}
</style>
