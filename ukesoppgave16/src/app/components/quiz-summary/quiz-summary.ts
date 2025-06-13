import {
  Component,
  Input,
  computed,
  Output,
  EventEmitter,
} from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { Question } from '../../../types/quiz';

@Component({
  selector: 'app-quiz-summary',
  templateUrl: './quiz-summary.html',
  styleUrl: './quiz-summary.css',
  imports: [RouterModule, RouterLink],
})
export class QuizSummary {
  isCorrectAnswer = (answer: number, index: number) =>
    answer === this.questions[index].answer;

  correctCount = computed(
    () => this.answers.filter(this.isCorrectAnswer).length
  );

  @Input() questions: Question[] = [];
  @Input() answers: any;
  @Output() restart = new EventEmitter<void>();
}
