import type { Question } from '../types/quiz';

interface QuizSummaryProps {
  questions: Question[];
  answers: number[];
  restart: () => void;
}

const QuizSummary = (props: QuizSummaryProps) => {
  const { questions, answers, restart } = props;

  const isCorrectAnswer = (answer: string, index: number) =>
    Number(answer) === questions[index].answer;
  const correctCount = answers.filter((answer: number, index: number) =>
    isCorrectAnswer(String(answer), index)
  ).length;

  return (
    <>
      <h2>Resultat</h2>
      <p>
        Du fikk {correctCount} av {questions.length} riktige.
      </p>
      <ul>
        {questions.map((q: Question, idx: number) => (
          <li key={q.question}>
            {q.question}
            <br />
            <small>
              Ditt svar: {q.options[Number(answers[idx])] ?? 'ikke svart'}
              <br />
              Riktig: {q.options[q.answer]}
            </small>
          </li>
        ))}
      </ul>
      <button onClick={restart}>Spill igjen</button>
      <br />
      <a href="/">Ta en ny quiz</a>
    </>
  );
};

export default QuizSummary;
