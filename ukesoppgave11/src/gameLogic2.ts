type Dice = Die[];
type Die = number;

const countOccurrences = (dice: Dice[]) =>
  dice.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

const hasOfAKind = (n: Die) => (dice: Dice[]) => {
  const counts = Object.values(countOccurrences(dice));
  return counts.includes(n);
};

const hasPair = hasOfAKind(2);
const hasThreeOfAKind = hasOfAKind(3);
const hasFourOfAKind = hasOfAKind(4);

const hasTwoPairs = (dice: Dice[]) => {
  const counts = Object.values(countOccurrences(dice));
  return counts.filter((n) => n === 2).length === 2;
};
