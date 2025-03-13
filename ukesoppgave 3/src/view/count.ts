import { State } from '../types';

export default (targetElement : Element, state : State) => {
  const newCounter = targetElement.cloneNode(true);
  newCounter.textContent = `Antall trekk: ${state.count}`;
  return newCounter;
}
