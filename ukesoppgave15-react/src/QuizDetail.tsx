import { quizzes } from './data/quizzes';
import QuestionView from './components/QuestionView';
import QuizSummary from './components/QuizSummary';
import { useState } from 'react';
import { useParams } from 'react-router';

export default function QuizDetail() {
  const { id } = useParams<{ id: string }>();
  const quiz = quizzes.find((x) => x.id === id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [answered, setAnswered] = useState(false);


  function answerQuestion(selectedIdx: number) {
    setAnswers((prev) => {
      const newAnswers = [...prev];
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
    <div>
      <h1>{quiz!.title}</h1>
      {currentQuestion < quiz!.questions.length ? (
        <QuestionView
          question={quiz!.questions[currentQuestion]}
          answers={answers}
          answered={answered}
          onAnswer={answerQuestion}
          onNext={nextQuestion}
          isCorrect = {false}
        />
      ) : (
        <QuizSummary
          questions={quiz!.questions}
          answers={answers}
          restart={restart}
        />
      )}
    </div>
  );
}
