import React from 'react';
import { useQuiz } from '../hooks/useQuiz';

interface QuizPageProps {
  categoryId: number;
  onQuizComplete: () => void;
}

/**
 * QuizPage component for displaying questions and handling answers
 * 
 * Design choices:
 * - Progress bar for visual feedback
 * - Card-based layout for questions
 * - Clear visual feedback for selected answers
 * - Results summary at the end
 */
export const QuizPage: React.FC<QuizPageProps> = ({ categoryId, onQuizComplete }) => {
  const {
    quizState,
    startQuiz,
    answerQuestion,
    getCurrentQuestion,
    isQuizCompleted,
    getProgress
  } = useQuiz();

  // Start quiz when component mounts or category changes
  React.useEffect(() => {
    startQuiz(categoryId);
  }, [categoryId, startQuiz]);

  const currentQuestion = getCurrentQuestion();

  // Handle answer selection
  const handleAnswerClick = (answer: string) => {
    answerQuestion(answer);
  };

  // Loading state
  if (quizState.isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading your quiz...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (quizState.error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-red-500 text-6xl mb-4">😵</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiz Error</h2>
          <p className="text-gray-600 mb-6">{quizState.error}</p>
          <button
            onClick={onQuizComplete}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Back to Categories
          </button>
        </div>
      </div>
    );
  }

  // Quiz completed - show results
  if (isQuizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-6">
              {quizState.score === 3 ? '🏆' : quizState.score >= 2 ? '🎉' : '💪'}
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
            
            <div className="text-6xl font-bold text-indigo-600 mb-2">
              {quizState.score} / {quizState.questions.length}
            </div>
            
            <p className="text-xl text-gray-600 mb-8">
              {getScoreMessage(quizState.score, quizState.questions.length)}
            </p>

            {/* Question review */}
            <div className="text-left mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Review your answers:</h3>
              {quizState.questions.map((question, index) => {
                const userAnswer = quizState.answers[index];
                const isCorrect = userAnswer === question.correct_answer;
                
                return (
                  <div key={index} className="mb-4 p-4 border border-gray-200 rounded-lg">
                    <p className="font-medium text-gray-800 mb-2">
                      {index + 1}. {question.question}
                    </p>
                    <div className="space-y-1">
                      <p className={`text-sm ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                        Your answer: {userAnswer} {isCorrect ? '✅' : '❌'}
                      </p>
                      {!isCorrect && (
                        <p className="text-sm text-green-600">
                          Correct answer: {question.correct_answer} ✅
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={onQuizComplete}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-lg font-semibold"
            >
              Try Another Category
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Active quiz - show current question
  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <p className="text-lg text-gray-600">No questions available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Question {quizState.currentQuestion + 1} of {quizState.questions.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              Score: {quizState.score}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${getProgress()}%` }}
            ></div>
          </div>
        </div>

        {/* Question card */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Category and difficulty */}
          <div className="flex justify-between items-center mb-6">
            <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
              {currentQuestion.category}
            </span>
            <span className={`text-sm font-medium px-3 py-1 rounded-full ${
              currentQuestion.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
              currentQuestion.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {currentQuestion.difficulty.charAt(0).toUpperCase() + currentQuestion.difficulty.slice(1)}
            </span>
          </div>

          {/* Question */}
          <h2 className="text-xl font-semibold text-gray-800 mb-8 leading-relaxed">
            {currentQuestion.question}
          </h2>

          {/* Answer options */}
          <div className="space-y-4">
            {currentQuestion.allAnswers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(answer)}
                className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200 group"
              >
                <div className="flex items-center">
                  <span className="w-8 h-8 bg-gray-100 group-hover:bg-indigo-200 rounded-full flex items-center justify-center text-sm font-medium text-gray-600 group-hover:text-indigo-800 mr-4">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-gray-800 group-hover:text-indigo-800 font-medium">
                    {answer}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Helper function to get encouraging message based on score
 */
const getScoreMessage = (score: number, total: number): string => {
  const percentage = (score / total) * 100;
  
  if (percentage === 100) return "Perfect! You're a trivia master! 🌟";
  if (percentage >= 67) return "Great job! You really know your stuff! 👏";
  if (percentage >= 33) return "Not bad! Keep practicing and you'll improve! 📚";
  return "Don't give up! Every expert was once a beginner! 💪";
};
