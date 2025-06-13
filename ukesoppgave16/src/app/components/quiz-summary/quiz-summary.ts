import {
  Component,
  Input,
  computed,
  Output,
  EventEmitter,
} from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-quiz-summary',
  templateUrl: './quiz-summary.html',
  styleUrl: './quiz-summary.css',
  standalone: true,
  imports: [RouterModule, RouterLink],
})
export class QuizSummary {
  isCorrectAnswer = (answer: number, index: number) =>
    answer === this.questions[index].answer;

  correctCount = computed(
    () => this.answers.filter(this.isCorrectAnswer).length
  );

  // @Input() questions: { answer: number }[] = [];
  // @Input() answers: number[] = [];
  // @Input() restart = () => {
  //   console.log('Restarting quiz...');
  // };
  @Input() questions: any;
  @Input() answers: any;
  @Output() restart = new EventEmitter<void>();
}
