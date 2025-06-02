<template>
  <div>
    <h1>Quiz List</h1>
    <ul>
      <li v-for="quiz in quizzes" :key="quiz.id">
        <router-link :to="`/quiz/${quiz.id}`">{{ quiz.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>
