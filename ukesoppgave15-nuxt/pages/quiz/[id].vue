<script setup lang="ts">
const route = useRoute();
const { id } = route.params;
const props = defineProps<{ quizId: string }>();
const quiz = computed(() => quizzes.find((q) => q.id === id));

const currentQuestion = ref(0);
const answers = ref<number[]>([]);
const answered = ref(false);

function answerQuestion(selectedIdx: number) {
  answers.value[currentQuestion.value] = selectedIdx;
  answered.value = true;
}
function nextQuestion() {
  answered.value = false;
  currentQuestion.value++;
}

function restart() {
  currentQuestion.value = 0;
  answers.value = [];
  answered.value = false;
}

watch(() => props.quizId, restart);

definePageMeta({
  layout: 'custom',
});
</script>

<template>
  <div v-if="quiz">
    <h1>{{ quiz.title }}</h1>
    <div v-if="currentQuestion < quiz.questions.length">
      <QuestionView
        :question="quiz.questions[currentQuestion]"
        :answered="answered"
        :selected="answers[currentQuestion]"
        @answer="answerQuestion"
        @next="nextQuestion"
      />
    </div>
    <QuizSummary
      v-else
      :questions="quiz.questions"
      :answers="answers"
      @restart="restart"
    />
  </div>
  <div v-else>
    <p>Quiz ikke funnet.</p>
  </div>
</template>
