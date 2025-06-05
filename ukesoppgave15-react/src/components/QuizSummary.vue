<template>
    <div>
        <h2>Resultat</h2>
        <p>Du fikk {{ correctCount }} av {{ questions.length }} riktige.</p>
        <ul>
            <li v-for="(q, idx) in questions" :key="q.question">
                {{ q.question }}<br />
                <small>
                    Ditt svar: {{ q.options[answers[idx]] ?? 'ikke svart' }}<br>
                    Riktig: {{ q.options[q.answer] }}
                </small>
            </li>
        </ul>
        <button @click="$emit('restart')">Spill igjen</button>
        <br />
        <router-link to="/">Ta en ny quiz</router-link>
    </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import type { Question } from '../types/quiz';

const props = defineProps<{
    questions: Question[];
    answers: number[]
}>();

const isCorrectAnswer = (answer: number, index: number) => answer === props.questions[index].answer;
const correctCount = computed(() => props.answers.filter(isCorrectAnswer).length);
</script>
