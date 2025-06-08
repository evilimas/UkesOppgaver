import type { QuestionViewProps } from '../types/quiz';

const QuestionView = (props: QuestionViewProps) => {
  const { question, answered, selected, onAnswer, onNext } = props;
  const isCorrect = selected === question.answer;

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
              Feil. Riktig svar :
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
