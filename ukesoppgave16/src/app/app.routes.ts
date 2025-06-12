import { Routes } from '@angular/router';
import { QuizDetails } from './pages/quiz-details/quiz-details';
import { QuizList } from './pages/quiz-list/quiz-list';
import { Test } from './pages/test/test';

export const routes: Routes = [
  { path: '', component: QuizList },
  { path: 'quiz/:id', component: QuizDetails },
  { path: 'test', component: Test },
];
