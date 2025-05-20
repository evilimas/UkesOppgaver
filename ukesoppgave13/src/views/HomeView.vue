<script setup lang="ts">
import { ref } from 'vue';
import { useDiceStore } from '@/stores/useDiceStore';
const $diceStore = useDiceStore();
// const players = ref<number>(store.players);
</script>

<template>
  <main>
    <h1>Velkommen til det beste Yatzy-spillet!</h1>
    <h2 v-for="(die,index) in $diceStore.diceChars" :key="index"> {{ die }}</h2>
    <!-- <div>
      <label for="players"
        >Hvor Mange spillere ?
        <input
          id="players"
          type="number"
          min="1"
          max="4"
          placeholder="Antall"
          v-model="store.playerCount"
        />
      </label>
    </div> -->
    <div class="wrapper">
      <nav>
        <RouterLink to="/yatzy">Spill Yatzy</RouterLink>
      </nav>
    </div>
  </main>
</template>
