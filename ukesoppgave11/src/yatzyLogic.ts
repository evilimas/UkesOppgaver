const compose = (...fns: Function[]) => (...args: any[]) => fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];

const dieValues = [1, 2, 3, 4, 5, 6] as const;
type Die = typeof dieValues[number];
type DieFrequencyTable = {
    [K in Die]: number;
  };

const countOne = (table: DieFrequencyTable, number: Die): DieFrequencyTable => ({
    ...table,
    [number]: table[number] + 1,
});

const createFrequencyTable = (numbers: Die[]) => 
    numbers.reduce(countOne, { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 });

const nOfAKind = (numberOfAKind: number) => (dice: Die[]): number => {
    const frequencyTable: DieFrequencyTable = createFrequencyTable(dice);
    const reduceOne = (points: number, dieValue: Die) => 
        frequencyTable[dieValue] >= numberOfAKind ? dieValue * numberOfAKind : points;    
    return dieValues.reduce(reduceOne, 0);
}
const pointsUpper = () => {}
const positiveToFixedNumber = (fixedNumber: number) => (n: number) => n > 0 ? fixedNumber : 0;
const pointsOnePair = nOfAKind(2);
const pointsThreeOfAKind = nOfAKind(3);
const pointsFourOfAKind = nOfAKind(4);
const pointsYatzy = compose(positiveToFixedNumber(50), nOfAKind(5));

export { createFrequencyTable, nOfAKind, pointsOnePair, pointsThreeOfAKind, pointsFourOfAKind, pointsYatzy };
export type { Die, DieFrequencyTable };

/*

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



*/