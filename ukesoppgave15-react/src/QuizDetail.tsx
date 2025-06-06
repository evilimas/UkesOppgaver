import { quizzes } from './data/quizzes';
import QuestionView from './components/QuestionView.tsx';
import QuizSummary from './components/QuizSummary.tsx';
import { useState } from 'react';
import { useParams } from 'react-router';

export default function QuizDetail() {
  const { id } = useParams<{ id: string }>();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [answered, setAnswered] = useState<boolean>(false);

  const quiz = quizzes.find((x) => x.id === id);

  const isCorrect = (id: number) => {
    if (currentQuestion >= quiz!.questions.length) return false;
    return id === quiz!.questions[currentQuestion].answer;
  };

  function answerQuestion(selectedIdx: number) {
    setAnswers((answers) => {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedIdx;
      return newAnswers;
    });
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
          answers={answers}
          answered={answered}
          onAnswer={answerQuestion}
          onNext={nextQuestion}
          isCorrect={isCorrect(answers[currentQuestion])}
        />
      ) : (
        <QuizSummary
          questions={quiz.questions}
          answers={answers}
          restart={restart}
        />
      )}
    </>
  );
}
