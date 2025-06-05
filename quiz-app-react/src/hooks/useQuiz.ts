import { useState, useCallback } from 'react';
import type { QuizState } from '../types';
import { TriviaApiService } from '../services/triviaApi';

/**
 * Custom hook for managing quiz state and logic
 * 
 * Why use a custom hook?
 * - Separation of concerns: State logic separated from UI
 * - Reusability: Can be used in multiple components
 * - Testability: Business logic can be tested independently
 * - Cleaner components: Components focus only on rendering
 */
export const useQuiz = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    answers: [],
    selectedCategory: null,
    questions: [],
    isLoading: false,
    error: null
  });

  /**
   * Starts a new quiz by fetching questions for the selected category
   * @param categoryId - The category ID to fetch questions for
   */
  const startQuiz = useCallback(async (categoryId: number) => {
    setQuizState(prev => ({
      ...prev,
      isLoading: true,
      error: null,
      selectedCategory: categoryId,
      currentQuestion: 0,
      score: 0,
      answers: []
    }));

    try {
      const response = await TriviaApiService.getQuestions(categoryId, 3);
      
      // Decode HTML entities in questions and answers
      const decodedQuestions = response.results.map(question => ({
        ...question,
        question: TriviaApiService.decodeHtmlEntities(question.question),
        correct_answer: TriviaApiService.decodeHtmlEntities(question.correct_answer),
        incorrect_answers: question.incorrect_answers.map(answer => 
          TriviaApiService.decodeHtmlEntities(answer)
        )
      }));

      setQuizState(prev => ({
        ...prev,
        questions: decodedQuestions,
        isLoading: false
      }));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      
      // Provide specific guidance for rate limiting
      let finalErrorMessage = errorMessage;
      if (errorMessage.includes('Rate limit') || errorMessage.includes('429')) {
        finalErrorMessage = 'The quiz API is temporarily busy. Please wait a few minutes and try selecting a category again.';
      }
      
      setQuizState(prev => ({
        ...prev,
        error: finalErrorMessage,
        isLoading: false
      }));
    }
  }, []);

  /**
   * Handles answering a question
   * @param answer - The selected answer
   */
  const answerQuestion = useCallback((answer: string) => {
    setQuizState(prev => {
      const currentQuestion = prev.questions[prev.currentQuestion];
      const isCorrect = answer === currentQuestion.correct_answer;
      
      return {
        ...prev,
        answers: [...prev.answers, answer],
        score: isCorrect ? prev.score + 1 : prev.score,
        currentQuestion: prev.currentQuestion + 1
      };
    });
  }, []);

  /**
   * Resets the quiz to initial state
   */
  const resetQuiz = useCallback(() => {
    setQuizState({
      currentQuestion: 0,
      score: 0,
      answers: [],
      selectedCategory: null,
      questions: [],
      isLoading: false,
      error: null
    });
  }, []);

  /**
   * Gets the current question with all answer options shuffled
   * @returns Current question with shuffled answers
   */
  const getCurrentQuestion = useCallback(() => {
    const question = quizState.questions[quizState.currentQuestion];
    if (!question) return null;

    // Shuffle answers to avoid correct answer always being in the same position
    const allAnswers = [...question.incorrect_answers, question.correct_answer];
    const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

    return {
      ...question,
      allAnswers: shuffledAnswers
    };
  }, [quizState.questions, quizState.currentQuestion]);

  /**
   * Checks if the quiz is completed
   */
  const isQuizCompleted = quizState.currentQuestion >= quizState.questions.length && quizState.questions.length > 0;

  /**
   * Gets the quiz progress as a percentage
   */
  const getProgress = () => {
    if (quizState.questions.length === 0) return 0;
    return (quizState.currentQuestion / quizState.questions.length) * 100;
  };

  return {
    quizState,
    startQuiz,
    answerQuestion,
    resetQuiz,
    getCurrentQuestion,
    isQuizCompleted,
    getProgress
  };
};
