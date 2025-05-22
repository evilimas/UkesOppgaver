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
  <table>
    <thead>
      <tr>
        <th>Kombinasjon</th>
        <th
          v-for="player of store.players"
          :key="player"
          :style="{ background: activePlayer === player ? 'lightgreen' : '' }"
        >
          Spiller: {{ player }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, combination) in uiLabels" :key="combination">
        <td :id="combination">{{ value }}</td>
        <td
          @click="store.nextTurn(combination)"
          v-for="(scoreBoard, index) of store.scoreBoards"
          :key="index"
          :id="combination"
        >
          {{ scoreBoard[combination] }}
        </td>
      </tr>
    </tbody>
  </table>
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
</style>
