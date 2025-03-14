// import model from "./GetNumbers.ts"
import { clickedNumber } from './src/view/moveNumber.ts';
import numberView from './src/view/numbers';
import counterView from './src/view/counter.ts';
import { State } from './types.ts';
import registry from './src/registry.ts';

registry.add('numbers', numberView);
registry.add('counter', counterView);
registry.add('moveNumber', clickedNumber);

const state: State = {
  numbers: [3, 5, 6, 8, 1, null, 2, 4, 7],
  count: 0,
};

const render = () => {
  window.requestAnimationFrame(() => {
    const main = document.querySelector('.slidingPuzzle');
    const newMain = registry.renderRoot(main, state);
    main?.replaceWith(newMain);
  });
};
render();

export { state, render };
