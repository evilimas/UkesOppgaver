// This file contains the game logic for the dice game.


// Impure

// const rollDie = () => Math.floor(Math.random() * 6) + 1;
// const rollDice = (n: number): Dice => Array.from({ length: n }, rollDie);

//Pure
const nOfAKind = (n: Dice) => n.filter((x) => x === n[0]).length;

const checkPoints = (n: Dice) => {
  n.reduce((a, b) => a + b, 0);
};

export { nOfAKind, checkPoints };
export type { rollDie };
