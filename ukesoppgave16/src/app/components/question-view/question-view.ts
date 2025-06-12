import { Component, Input } from '@angular/core';
import { quizzes } from '../../../data/quizes';
import type { Question } from '../../../types/quiz';



@Component({
  selector: 'app-question-view',
  imports: [],
  templateUrl: './question-view.html',
  styleUrl: './question-view.css'
})
export class QuestionView {
  @Input() question!: Question;
  @Input() answered!: boolean;
  @Input() selected!: number | null;
}
