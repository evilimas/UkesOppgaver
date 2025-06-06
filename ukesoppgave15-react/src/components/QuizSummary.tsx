import type { Question, QuizSummaryProps } from '../types/quiz';
import { Link } from 'react-router';

const QuizSummary = (props: QuizSummaryProps) => {
  const { questions, answers, onRestart } = props;

  const isCorrectAnswer = (answer: number, index: number) =>
    answer === props.questions[index].answer;

  const correctCount = answers.filter(isCorrectAnswer).length;

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
              Ditt svar: {q.options[answers[idx]] ?? 'ikke svart'}
              <br />
              Riktig: {q.options[q.answer]}
            </small>
          </li>
        ))}
      </ul>
      <button onClick={onRestart}>Spill igjen</button>
      <br />
      <Link to={'/'}>Ta en ny quiz</Link>
    </>
  );
};

export default QuizSummary;
