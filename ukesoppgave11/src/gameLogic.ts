// This file contains the game logic for the dice game.
  
type Dice = number[];
type rollDie = () => number;
// Impure

// const rollDie = () => Math.floor(Math.random() * 6) + 1;
// const rollDice = (n: number): Dice => Array.from({ length: n }, rollDie);

//Pure
const nOfAKind = (n: Dice) => n.filter((x) => x === n[0]).length;
const checkPair = (n: Dice) => n.filter((x) => x === n[0]).length === 2;
const checkThreeOfAKind = (n: Dice) => n.filter((x) => x === n[0]).length === 3;
const checkFourOfAKind = (n: Dice) => n.filter((x) => x === n[0]).length === 4;
const checkFiveOfAKind = (n: Dice) => n.filter((x) => x === n[0]).length === 5;
const checkSixOfAKind = (n: Dice) => n.filter((x) => x === n[0]).length === 6;
const checkTwoPair = (n: Dice) => {
  const first = n.filter((x) => x === n[0]).length;
  const second = n.filter((x) => x === n[1]).length;
  const third = n.filter((x) => x === n[2]).length;
  return (first === 2 && second === 2) || (first === 2 && third === 2) || (second === 2 && third === 2);
};
const checkYatzy = (n: Dice) => n.filter((x) => x === n[0]).length === 6;
const checkFullHouse = (n: Dice) => {
  const first = n.filter((x) => x === n[0]).length;
  const second = n.filter((x) => x === n[1]).length;
  return (first === 2 && second === 3) || (first === 3 && second === 2);
};
const checkSmallStraight = (n: Dice) => {}
const checkLargeStraight = (n: Dice) => {}
const checkChance = (n: Dice) => n.reduce((a, b) => a + b, 0);

const checkPoints = (n: Dice) => { n.reduce((a, b) => a + b, 0);}

export { rollDie, nOfAKind , checkPoints};