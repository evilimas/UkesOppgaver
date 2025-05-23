<script setup lang="ts">
import { ref, computed } from 'vue';
import { yatzyStore } from '@/stores/yatzyStore';
import { uiLabels } from '../yatzyLogic';

const store = yatzyStore();

defineProps<{
  activePlayer: number;
}>();
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Kombinasjon</th>
          <th
            v-for="player of store.players"
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
            v-for="(scoreBoard, index) of store.scoreBoards"
            :key="index"
            :id="combination"
            :class="{
              disabled:
                scoreBoard[combination] !== null ||
                scoreBoard[combination] == 0,
            }"
            :style="{
              background: activePlayer === index + 1 ? 'darkblue' : '',
              cursor:
                scoreBoard[combination] !== null ? 'not-allowed' : 'pointer',
              opacity:
                scoreBoard[combination] !== null || scoreBoard[combination] == 0
                  ? 0.3
                  : 1,
            }"
            @click="
              scoreBoard[combination] === null
                ? store.nextTurn(combination)
                : null
            "
          >
            {{ scoreBoard[combination] }}
          </td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <th>Poeng</th>
          <th v-for="player of store.players" :key="player">
            Spiller: {{ player }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sum</td>
          <td v-for="score in store.allBoardScores" :key="score">
            {{ score.sum }}
          </td>
        </tr>
        <tr>
          <td>Bonus</td>
          <td v-for="score in store.allBoardScores" :key="score">
            {{ score.bonus }}
          </td>
        </tr>
        <tr>
          <td>Totalsum</td>
          <td v-for="score in store.allBoardScores" :key="score">
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
