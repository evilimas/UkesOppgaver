import { Link } from 'react-router';
import './App.css';
import { quizzes } from './data/quizzes';

function App() {
  return (
    <>
      <div>
        <h1>Quiz List</h1>
        <ul>
          {quizzes.map((quiz) => (
            <li key={quiz.id}>
              <Link to={`/quiz/${quiz.id}`}>{quiz.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

/* <template>
  <div>
    <h1>Quiz List</h1>
    <ul>
      <li v-for="quiz in quizzes" :key="quiz.id">
        <router-link :to="`/quiz/${quiz.id}`">{{ quiz.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { quizzes } from '../data/quizzes'
</script> */
