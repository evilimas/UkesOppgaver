import React from 'react';
import type { Question } from '../types/quiz';

type QuestionViewProps = {
  question: Question;
  answers: number[];
  answered: boolean;
  isCorrect: boolean;
  onAnswer: (idx: number) => void;
  onNext: () => void;
};

const QuestionView: React.FC<QuestionViewProps> = (props) => {
  return (
    <div>
      <h2>{props.question.question}</h2>
      <ul>
        {props.question.options.map((option, idx) => (
          <li key={idx}>
            <button
              disabled={props.answered}
              onClick={() => props.onAnswer(idx)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      {props.answered && (
        <div>
          {props.isCorrect ? (
            <p>Riktig!</p>
          ) : (
            <p>
              Feil. Riktig svar:
              <strong>{props.question.options[props.question.answer]}</strong>
            </p>
          )}
          <button onClick={props.onNext}>Neste spørsmål</button>
        </div>
      )}
    </div>
  );
};

export default QuestionView;
