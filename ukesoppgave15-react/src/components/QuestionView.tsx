import React from 'react';
import type { Question } from '../types/quiz';

type QuestionViewProps = {
  question: Question;
  answers: number[];
  answered: boolean;
  isCorrect: boolean;
  onAnswer: (idx: number) => void;
  onNext: () => void;
};

const QuestionView: React.FC<QuestionViewProps> = (props) => {
  return (
    <div>
      <h2>{props.question.question}</h2>
      <ul>
        {props.question.options.map((option, idx) => (
          <li key={idx}>
            <button
              disabled={props.answered}
              onClick={() => props.onAnswer(idx)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      {props.answered && (
        <div>
          {props.isCorrect ? (
            <p>Riktig!</p>
          ) : (
            <p>
              Feil. Riktig svar:
              <strong>{props.question.options[props.question.answer]}</strong>
            </p>
          )}
          <button onClick={props.onNext}>Neste spørsmål</button>
        </div>
      )}
    </div>
  );
};

export default QuestionView;

{
  /* <template>
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
import { defineProps, computed } from 'vue';
import type { Question } from '../types/quiz';
const props = defineProps<{
  question: Question;
  answered: boolean;
  selected: number | null;
}>()

const isCorrect = computed(() => props.selected === props.question.answer)
</script> */
}
