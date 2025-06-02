<template>
  <div>
    <h1>Quiz List</h1>
    <ul>
      <li v-for="quiz in quizzes" :key="quiz.id">
        <NuxtLink :to="`/quiz/${quiz.id}`">{{ quiz.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>
