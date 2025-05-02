<script setup lang="ts">
import RandomDeck from './components/RandomDeck.vue'

</script>

<template>
  <header>
    <div>
      <RandomDeck text='Hello random'/>
    </div>
  </header>

 
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

</style>
