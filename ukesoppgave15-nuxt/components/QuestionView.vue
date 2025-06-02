<template>
  <div>
    <h2>{{ question.question }}</h2>
    <ul>
      <li v-for="(option, idx) in question.options" :key="idx">
        <button :disabled="answered" @click="$emit('answer', idx)">
          {{ option }}
        </button>
      </li>
    </ul>
    <div v-if="answered">
      <p v-if="isCorrect">Riktig!</p>
      <p v-else>
        Feil. Riktig svar:
        <strong>
          {{ question.options[question.answer] }}
        </strong>
      </p>
      <button @click="$emit('next')">Neste spørsmål</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  question: Question;
  answered: boolean;
  selected: number | null;
}>();

const isCorrect = computed(() => props.selected === props.question.answer);
</script>
