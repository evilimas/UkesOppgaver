import type { Quiz } from '../types/quiz';

export const quizzes: Quiz[] = [
  {
    id: '1',
    title: 'Hovedsteder i Europa',
    questions: [
      {
        question: 'Hva er hovedstaden i Norge?',
        options: ['Stockholm', 'Oslo', 'København', 'Helsinki'],
        answer: 1,
      },
      {
        question: 'Hva er hovedstaden i Spania?',
        options: ['Barcelona', 'Madrid', 'Lisboa', 'Valencia'],
        answer: 1,
      },
    ],
  },
  {
    id: '2',
    title: 'Enkle matteoppgaver',
    questions: [
      {
        question: 'Hva er 2 + 2?',
        options: ['3', '4', '5', '6'],
        answer: 1,
      },
      {
        question: 'Hva er 5 * 3?',
        options: ['8', '12', '15', '18'],
        answer: 2,
      },
    ],
  },
];
