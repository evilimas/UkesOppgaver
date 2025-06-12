import { ActivatedRoute } from '@angular/router';
import { Component, signal, inject } from '@angular/core';

@Component({
  selector: 'app-quiz-details',
  imports: [],
  templateUrl: './quiz-details.html',
  styleUrl: './quiz-details.css',
})
export class QuizDetails {
  quizId = signal('');
  private activatedRoute = inject(ActivatedRoute);

  onstructor() {
    this.activatedRoute.params.subscribe((params) => {
      this.quizId.set(params['id']);
    });
  }
}
