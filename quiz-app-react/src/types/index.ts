// Types for Open Trivia Database API responses

export interface QuizCategory {
  id: number;
  name: string;
}

export interface CategoriesResponse {
  trivia_categories: QuizCategory[];
}

export interface QuizQuestion {
  type: 'multiple' | 'boolean';
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuizResponse {
  response_code: number;
  results: QuizQuestion[];
}

// Application state types
export interface QuizState {
  currentQuestion: number;
  score: number;
  answers: string[];
  selectedCategory: number | null;
  questions: QuizQuestion[];
  isLoading: boolean;
  error: string | null;
}

// Response codes from the API
export const ResponseCode = {
  SUCCESS: 0,
  NO_RESULTS: 1,
  INVALID_PARAMETER: 2,
  TOKEN_NOT_FOUND: 3,
  TOKEN_EMPTY: 4,
  RATE_LIMIT: 5
} as const;

export type ResponseCode = typeof ResponseCode[keyof typeof ResponseCode];
