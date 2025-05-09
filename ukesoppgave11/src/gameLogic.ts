type Die = number;
type Dice = Die[];
type rollDie = () => number;
// type count = ()=>
<<<<<<< HEAD

export const countDie = (dice: Dice[]): Record<Die, number> =>
=======
const findCombos = (dice: Dice[]) => {}
const countDie = (dice: Dice[]): Record<Die, number> =>
>>>>>>> 40604e2ec62454aa0415b4303ddf4773a70634ce
  dice.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

export const nOfAKind =
  (n: Die) =>
  (dice: Dice[]): Boolean => {
    const counts = Object.values(countDie(dice));
    return counts.includes(n);
  };

const hasPair = nOfAKind(2);
const hasThreeOfAKind = nOfAKind(3);
const hasFourOfAKind = nOfAKind(4);

const hasTwoPairs = (dice: Dice[]) => {
  const counts = Object.values(countDie(dice));
  return counts.filter((n) => n === 2).length === 2;
};
export { findCombos }