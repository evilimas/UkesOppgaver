import { Component } from '@angular/core';
import { quizzes } from '../../../data/quizes';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-list',
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './quiz-list.html',
  styleUrl: './quiz-list.css',
})
export class QuizList {
  quizzes = quizzes;
}
