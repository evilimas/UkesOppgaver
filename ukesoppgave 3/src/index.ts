import registry from './registry';
import countView from './view/count';
import numbersView from './view/numbers';
import { State } from './types';

registry.add('count', countView);
registry.add('numbers', numbersView);

const state: State = {
  numbers: [1, 2, 3, null, 1, 2, 3, 4, 5],
  count: 0,
};

window.requestAnimationFrame(() => {
  const main = document.querySelector<Element>('#app');
  const newMain = registry?.renderRoot(main, state);
  main?.replaceWith(newMain);
});

export { state };
