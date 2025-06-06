import { quizzes } from './data/quizzes';
import QuestionView from './components/QuestionView.tsx';
import QuizSummary from './components/QuizSummary.tsx';
import { useState } from 'react';
import { useParams } from 'react-router';

const QuizDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [answered, setAnswered] = useState<boolean>(false);

  const quiz = quizzes.find((x) => x.id === id);

  function answerQuestion(selectedIdx: number) {
    answers[currentQuestion] = selectedIdx;
    setAnswers([...answers]);
    setAnswered(true);
  }

  function nextQuestion() {
    setAnswered(false);
    setCurrentQuestion(currentQuestion + 1);
  }

  function restart() {
    setCurrentQuestion(0);
    setAnswers([]);
    setAnswered(false);
  }

  if (!quiz) {
    return (
      <div>
        <p>Quiz not found</p>
      </div>
    );
  }

  return (
    <>
      <h1>{quiz.title}</h1>
      {currentQuestion < quiz.questions.length ? (
        <QuestionView
          question={quiz.questions[currentQuestion]}
          answered={answered}
          selected={answers[currentQuestion]}
          onAnswer={answerQuestion}
          onNext={nextQuestion}
        />
      ) : (
        <QuizSummary
          questions={quiz.questions}
          answers={answers}
          onRestart={restart}
        />
      )}
    </>
  );
};

export default QuizDetail;
