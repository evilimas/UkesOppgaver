import type { Question } from '../types/quiz';
function QuizSummary({
  questions,
  answers,
  restart,
}: {
  questions: Question[];
  answers: string[];
  restart: () => void;
}) {
  const isCorrectAnswer = (answer: string, index: number) =>
    Number(answer) === questions[index].answer;
  const correctCount = answers.filter((answer: string, index: number) =>
    isCorrectAnswer(answer, index)
  ).length;

  return (
    <div>
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
    </div>
  );
}

export default QuizSummary;
