import { Component } from '@angular/core';
import { quizzes } from '../../../data/quizes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-test',
  imports: [RouterModule],
  template: `<h1>Hei!</h1>`,
})
export class Test {
  quizzes = quizzes;
}
