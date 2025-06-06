import type { Question } from '../types/quiz';

interface QuestionViewProps {
  question: Question;
  answers: number[];
  answered: boolean;
  isCorrect: boolean;
  onAnswer: (idx: number) => void;
  onNext: () => void;
}

const QuestionView = (props: QuestionViewProps) => {
  const { question, answered, isCorrect, onAnswer, onNext } = props;

  return (
    <>
      <h2>{question.question}</h2>
      <ul>
        {question.options.map((option, idx) => (
          <li key={idx}>
            <button disabled={answered} onClick={() => onAnswer(idx)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
      {answered && (
        <div>
          {isCorrect ? (
            <p>Riktig!</p>
          ) : (
            <p>
              Feil. Riktig svar:
              <strong>{question.options[question.answer]}</strong>
            </p>
          )}
          <button onClick={onNext}>Neste spørsmål</button>
        </div>
      )}
    </>
  );
};

export default QuestionView;
