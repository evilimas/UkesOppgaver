// import model from "./GetNumbers.ts"
import numberView from './src/view/numbers';
import counterView from './src/view/counter.ts';
import registry from './src/registry.ts';

registry.add('numbers', numberView);
registry.add('counter', counterView);

const state: Object = {
  numbers: [3, 5, 6, 8, 1, null, 2, 4, 7],
  count: 0,
};

window.requestAnimationFrame(() => {
  const main = document.querySelector('.slidingPuzzle');
  const newMain = registry.renderRoot(main, state);
  main?.replaceWith(newMain);
});

export { state }