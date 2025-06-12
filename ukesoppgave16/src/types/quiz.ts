interface Quiz {
  id: string;
  title: string;
  questions: Question[];
}

interface Question {
  question: string;
  options: string[];
  answer: number; // index i options-arrayen
}

export type { Quiz, Question };
