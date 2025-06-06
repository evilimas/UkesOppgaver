interface Quiz {
  id: string;
  title: string;
  questions: Question[];
}

interface Question {
  question: string;
  options: string[];
  answer: number;
}

interface QuestionViewProps {
  question: Question;
  answered: boolean;
  selected: number[] | number;
  onAnswer: (idx: number) => void;
  onNext: () => void;
}

interface QuizSummaryProps {
  questions: Question[];
  answers: number[];
  onRestart: () => void;
}

export type { Quiz, Question, QuestionViewProps, QuizSummaryProps };
