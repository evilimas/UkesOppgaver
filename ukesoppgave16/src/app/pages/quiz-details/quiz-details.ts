import { ActivatedRoute } from '@angular/router';
import { Component, signal, inject, computed } from '@angular/core';
import { quizzes } from '../../../data/quizes';
import { QuestionView } from '../../components/question-view/question-view';
import { QuizSummary } from '../../components/quiz-summary/quiz-summary';

@Component({
  selector: 'app-quiz-details',
  imports: [QuestionView, QuizSummary],
  templateUrl: './quiz-details.html',
  styleUrl: './quiz-details.css',
})
export class QuizDetails {
  quizzes = quizzes;
  quizId = signal('');
  private activatedRoute = inject(ActivatedRoute);
  quiz = computed(() => quizzes.find((q) => q.id === this.quizId()));
  currentQuestion = signal(0);
  answers = signal<number[]>([]);
  answered = signal(false);

  answerQuestion(selectedIdx: number) {
    this.answers()[this.currentQuestion()] = selectedIdx;
    this.answered.set(true);
  }
  nextQuestion() {
    this.answered.set(false);
    this.currentQuestion.set(this.currentQuestion() + 1);
  }

  restart() {
    this.currentQuestion.set(0);
    this.answers.set([]);
    this.answered.set(false);
  }

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      this.quizId.set(params['id']);
    });
  }
}
