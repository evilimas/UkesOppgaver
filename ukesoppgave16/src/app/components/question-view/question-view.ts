import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-view',
  imports: [],
  templateUrl: './question-view.html',
  styleUrl: './question-view.css'
})
export class QuestionView {
 @Input() question: any;
  @Input() answered: boolean = false;
  @Input() selected: number | null = null;

  @Output() answer = new EventEmitter<number>();
  @Output() next = new EventEmitter<void>();
}