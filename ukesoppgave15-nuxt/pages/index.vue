<template>
  <NuxtLayout :name="customLayout">
    <div>
      <h1>Quiz List</h1>
      <ul>
        <li v-for="quiz in quizzes" :key="quiz.id">
          <NuxtLink :to="`/quiz/${quiz.id}`">{{ quiz.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
// import CustomLayout from '~/layouts/customLayout.vue';

const layout = 'customLayout';
</script>
