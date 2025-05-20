<script setup lang="ts">
import { ref, computed } from 'vue';
import { useScoreboardStore } from '@/stores/useScoreboardStore';


const $scoreStore = useScoreboardStore();

</script>

<template>
  <fieldset>
    <legend>Scoreboard </legend>
    <div v-for="(combination) of $scoreStore.board">{{ combination.name }}     {{ combination.score }}</div>
  </fieldset>
</template>

<style scoped></style>
