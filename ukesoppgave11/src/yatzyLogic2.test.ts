import { describe, it, expect } from 'vitest';
import * as Y from './yatzyLogic2';
import type { Die, DieFrequencyTable } from './yatzyLogic2';

describe('YatzyLogic', () => {
  it('Frekvenstabell for terninger 1, 1, 1, 2, 3', () => {
    // arrange
    const dice: Die[] = [1, 1, 1, 2, 3];

    // act
    const counts: DieFrequencyTable = Y.createFrequencyTable(dice);

    // assert
    expect(counts).toEqual({ 1: 3, 2: 1, 3: 1, 4: 0, 5: 0, 6: 0 });
  });

  it('Ikke ett par', () => {
    // arrange
    const dice: Die[] = [1, 2, 3, 4, 5];

    // act
    const points = Y.scoreFunctions.onePair(dice);

    // assert
    expect(points).toBe(0);
  });

  it('aces ', () => {
    // arrange
    const dice: Die[] = [1, 1, 1, 4, 5];

    // act
    const points = Y.scoreFunctions.aces(dice);

    // assert
    expect(points).toBe(3);
  });

  it('fives ', () => {
    // arrange
    const dice: Die[] = [5, 5, 1, 4, 5];

    // act
    const points = Y.scoreFunctions.fives(dice);

    // assert
    expect(points).toBe(15);
  });

  it('bonus hvis ponts >= 63', () => {
    // arrange
    const score = {
      aces: 3,
      twos: 4,
      threes: 9,
      fours: 12,
      fives: 20,
      sixes: 18,
    };

    // act
    const points = Y.scoreFunctions.bonus.call(score);

    // assert
    expect(points).toBe(50);
  });

  it('ingen bonus hvis ponts < 63', () => {
    // arrange
    const score = {
      aces: 2,
      twos: 4,
      threes: 6,
      fours: 8,
      fives: 10,
      sixes: 12,
    };

    // act
    const points = Y.scoreFunctions.bonus(score);

    // assert
    expect(points).toBe(0);
  });

  it('Par i 5', () => {
    // arrange
    const dice: Die[] = [1, 5, 3, 4, 5];

    // act
    const points = Y.scoreFunctions.onePair(dice);

    // assert
    expect(points).toBe(10);
  });

  it('Par i 3 og 5 - one pair', () => {
    // arrange
    const dice: Die[] = [3, 5, 3, 4, 5];

    // act
    const points = Y.scoreFunctions.onePair(dice);

    // assert
    expect(points).toBe(10);
  });

  it('Par i 3 og 5', () => {
    // arrange
    const dice: Die[] = [3, 5, 3, 4, 5];

    // act
    const points = Y.scoreFunctions.twoPairs(dice);

    // assert
    expect(points).toBe(16);
  });

  it('Fire like 2', () => {
    // arrange
    const dice: Die[] = [2, 2, 1, 2, 2];

    // act
    const points = Y.scoreFunctions.fourOfAKind(dice);

    // assert
    expect(points).toBe(8);
  });

  it('Yatzy', () => {
    // arrange
    const dice: Die[] = [2, 2, 2, 2, 2];

    // act
    const points = Y.scoreFunctions.yatzy(dice);

    // assert
    expect(points).toBe(50);
  });

  it('ikke Yatzy', () => {
    // arrange
    const dice: Die[] = [1, 2, 2, 2, 2];

    // act
    const points = Y.scoreFunctions.yatzy(dice);

    // assert
    expect(points).toBe(0);
  });

  it('hus 3-3 og 2-5', () => {
    // arrange
    const dice: Die[] = [3, 5, 3, 3, 5];

    // act
    const points = Y.scoreFunctions.house(dice);

    // assert
    expect(points).toBe(19);
  });

  it('small straight', () => {
    // arrange
    const dice: Die[] = [1, 2, 3, 4, 5];

    // act
    const points = Y.scoreFunctions.smallStraight(dice);

    // assert
    expect(points).toBe(15);
  });

  it('large straight', () => {
    // arrange
    const dice: Die[] = [2, 3, 4, 5, 6];

    // act
    const points = Y.scoreFunctions.largeStraight(dice);

    // assert
    expect(points).toBe(20);
  });

  it('chanse', () => {
    // arrange
    const dice: Die[] = [2, 2, 2, 2, 2];

    // act
    const points = Y.scoreFunctions.chance(dice);

    // assert
    expect(points).toBe(10);
  });
});
