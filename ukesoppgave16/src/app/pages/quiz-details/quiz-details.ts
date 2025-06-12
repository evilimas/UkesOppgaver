import { ActivatedRoute } from '@angular/router';
import { Component, signal, inject, computed } from '@angular/core';
import { quizzes } from '../../../data/quizes';

@Component({
  selector: 'app-quiz-details',
  imports: [],
  templateUrl: './quiz-details.html',
  styleUrl: './quiz-details.css',
})
export class QuizDetails {
  quizzes = quizzes;
  quizId = signal('');
  private activatedRoute = inject(ActivatedRoute);
  quiz = computed(() => quizzes.find((q) => q.id === this.quizId));

  onstructor() {
    this.activatedRoute.params.subscribe((params) => {
      this.quizId.set(params['id']);
    });
  }
}
