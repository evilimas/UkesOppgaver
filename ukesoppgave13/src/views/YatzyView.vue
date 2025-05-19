<script setup lang="ts">
import Scoreboard from '@/components/Scoreboard.vue';
import Dice from '@/components/Dice.vue';
</script>

<template>
  <div class="about">
    <Dice />
    <Scoreboard />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
