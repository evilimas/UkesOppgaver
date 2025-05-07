let dice;
let currentPoints;

function pointsOnePair() {
  currentPoints = nOfAKind(2);
}

function pointsThreeOfAKind() {
  currentPoints = nOfAKind(3);
}

function pointsFourOfAKind() {
  currentPoints = nOfAKind(4);
}

function pointsYatzy() {
  currentPoints = nOfAKind(5) > 0 ? 50 : 0;
}

function pointsTwoPairs() {
  const frequencyTable = createFrequencyTable(dice);
  let points = 0;
  let pairCount = 0;
  for (let number = 6; number > 0; number--) {
    if (frequencyTable[number] >= 2) {
      points += number * 2;
      pairCount++;
    }
  }
  currentPoints = pairCount >= 2 ? points : 0;
}

function pointsHouse() {
  const frequencyTable = createFrequencyTable(dice);
  let has3 = false;
  let has2 = false;
  for (let frequency of frequencyTable) {
    if (frequency === 3) has3 = true;
    if (frequency === 2) has2 = true;
  }
  currentPoints = has2 && has3 ? sum(dice) : 0;
}

function sum(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

function pointsSmallStraight() {
  const frequencyTable = createFrequencyTable(dice);
  let hasSmallStraight = true;
  for (let number = 1; number < 6; number++) {
    if (frequencyTable[number] !== 1) hasSmallStraight = false;
  }
  currentPoints = hasSmallStraight ? 15 : 0;
}

function nOfAKind(n) {
  const frequencyTable = createFrequencyTable(dice);
  let points = 0;
  for (let number = 0; number < 6; number++) {
    if (frequencyTable[number] >= n) {
      points = number * n;
    }
  }
  return points;
}

function createFrequencyTable(numbers) {
  const table = [0, 0, 0, 0, 0, 0, 0];
  for (let number of numbers) {
    table[number]++;
  }
  return table;
}
