import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizList } from './pages/quiz-list/quiz-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, QuizList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'ukesoppgave16';
}
