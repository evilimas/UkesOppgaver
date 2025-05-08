// This file contains the game logic for the dice game.
  
  type Dice = number[];
  type rollDie = () => number;

const rollDie = () => Math.floor(Math.random() * 6) + 1;
const rollDice = (n: number): Dice => Array.from({ length: n }, rollDie);
const nOfAKind = (n: Dice) => n.filter((x) => x === n[0]).length;

export { rollDice, rollDie, nOfAKind };