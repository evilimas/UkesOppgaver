import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSummary } from './quiz-summary';

describe('QuizSummary', () => {
  let component: QuizSummary;
  let fixture: ComponentFixture<QuizSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
