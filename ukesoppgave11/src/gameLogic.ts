type Die = number;
type Dice = Die[];
type rollDie = () => number;
type FindCombos = (dice: Dice[]) => yatzyCombos;
type hasPair = () => number[];
const yatzyCombos = [
  'ones',
  'twos',
  'threes',
  'fours',
  'fives',
  'sixes',
  'pair',
  'twoPairs',
  'threeOfAKind',
  'fourOfAKind',
  'fullHouse',
  'smallStraight',
  'largeStraight',
  'yatzy',
  'chance',
] as const;

type yatzyCombinations = (typeof yatzyCombos)[number];

export const findCombos: FindCombos = (dice: Dice[]): yatzyCombos => {
  return 'yatzy';
};

export const countDie = (dice: Dice[]): Record<Die, number> =>
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
const hasYatzy = nOfAKind(5);

const hasTwoPairs = (dice: Dice[]) => {
  const counts = Object.values(countDie(dice));
  return counts.filter((n) => n === 2).length === 2;
};
