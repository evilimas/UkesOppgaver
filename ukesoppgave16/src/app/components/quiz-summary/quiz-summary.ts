import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-quiz-summary',
  imports: [],
  templateUrl: './quiz-summary.html',
  styleUrl: './quiz-summary.css'
})
export class QuizSummary {
@Input() restart = () => {
  console.log('Restarting quiz...');
};
}
