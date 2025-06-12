import { Component } from '@angular/core';
import { quizzes } from '../../../data/quizes';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-quiz-list',
  imports: [RouterModule, RouterLink],
  templateUrl: './quiz-list.html',
  styleUrl: './quiz-list.css',
})
export class QuizList {
  quizzes = quizzes;
}
