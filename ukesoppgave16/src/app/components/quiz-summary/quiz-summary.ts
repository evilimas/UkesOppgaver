import { Component, Input, computed } from '@angular/core';

@Component({
  selector: 'app-quiz-summary',
  imports: [],
  templateUrl: './quiz-summary.html',
  styleUrl: './quiz-summary.css',
})
export class QuizSummary {
  isCorrectAnswer = (answer: number, index: number) =>
    answer === this.questions[index].answer;

  correctCount = computed(
    () => this.answers.filter(this.isCorrectAnswer).length
  );

  @Input() questions: { answer: number }[] = [];
  @Input() answers: number[] = [];
  @Input() restart = () => {
    console.log('Restarting quiz...');
  };
}
