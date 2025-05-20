<script setup lang="ts">
import { ref, computed } from 'vue';
import { useScoreboardStore } from '@/stores/useScoreboardStore';


const $scoreStore = useScoreboardStore();

</script>

<template>
  <fieldset>
    <legend>Scoreboard </legend>
    <div class="scoreboard" v-for="(combination) of $scoreStore.board">
    <button >{{ combination.name }}</button> 
    <span>{{ combination.score }}</span>
    </div>
  </fieldset>
</template>

<style scoped>
.scoreboard {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
