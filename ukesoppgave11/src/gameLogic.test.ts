import { describe, expect, it } from 'vitest';
import * as Y from './yatzyLogic';
import type { Die, DieFrequencyTable } from './yatzyLogic';

describe('YatzyLogic', () => {
  it('Frekvenstabell for terninger 1, 1, 1, 2, 3', () => {
    // arrange
    const dice: Die[] = [1, 1, 1, 2, 3];

    // act
    const counts: DieFrequencyTable = Y.createFrequencyTable(dice);

    // assert
    expect(counts).toEqual({ 1: 3, 2: 1, 3: 1, 4: 0, 5: 0, 6: 0 });
  });
  it('tre enere', () => {
    const dice: Die[] = [1, 1, 1, 2, 3];
    const counts: DieFrequencyTable = Y.createFrequencyTable(dice);
    const points = Y.pointsThreeOfAKind(dice);
    expect(points).toBe(3);
  });

  it('Ikke ett par', () => {
    // arrange
    const dice: Die[] = [1, 2, 3, 4, 5];

    // act
    const points = Y.pointsOnePair(dice);

    // assert
    expect(points).toBe(0);
  });

  it('Par i 5', () => {
    // arrange
    const dice: Die[] = [1, 5, 3, 4, 5];

    // act
    const points = Y.pointsOnePair(dice);

    // assert
    expect(points).toBe(10);
  });

  it('Par i 3 og 5', () => {
    // arrange
    const dice: Die[] = [3, 5, 3, 4, 5];

    // act
    const points = Y.pointsOnePair(dice);

    // assert
    expect(points).toBe(10);
  });

  it('Fire like 2', () => {
    // arrange
    const dice: Die[] = [2, 2, 1, 2, 2];

    // act
    const points = Y.pointsFourOfAKind(dice);

    // assert
    expect(points).toBe(8);
  });

  it('Yatzy', () => {
    // arrange
    const dice: Die[] = [2, 2, 2, 2, 2];

    // act
    const points = Y.pointsYatzy(dice);

    // assert
    expect(points).toBe(50);
  });

  //   ------------  //

  it('To par i 1 og 3 ', () => {
    // arrange
    const dice: Die[] = [1, 1, 2, 3, 3];

    // act
    const points = Y.pointsToPairs(2)(dice);

    // assert
    expect(points).toBe(8);
  });

  it('House', () => {
    // arrange
    const dice: Die[] = [2, 2, 3, 3, 3];

    // act
    const points = Y.pointsHouse(dice);

    // assert
    expect(points).toBe(13);
  });

  it('Liten straight', () => {
    // arrange
    const dice: Die[] = [1, 2, 3, 4, 5];

    // act
    const points = Y.pointsSmallStraight(dice);

    // assert
    expect(points).toBe(15);
  });

  it('Stor straight', () => {
    // arrange
    const dice: Die[] = [2, 3, 4, 5, 6];

    // act
    const points = Y.pointsLargeStraight(dice);

    // assert
    expect(points).toBe(20);
  });

  it('Liten straight 2', () => {
    // arrange
    const dice: Die[] = [1, 2, 3, 4, 5];

    // act
    const points = Y.pointsStraight(dice);

    // assert
    expect(points).toBe(15);
  });

  it('Stor straight 2', () => {
    // arrange
    const dice: Die[] = [2, 3, 4, 5, 6];

    // act
    const points = Y.pointsStraight(dice);

    // assert
    expect(points).toBe(20);
  });

  it('Ikke stor straight', () => {
    // arrange
    const dice: Die[] = [2, 3, 3, 5, 6];

    // act
    const points = Y.pointsStraight(dice);

    // assert
    expect(points).toBe(0);
  });

  it('large straight', () => {
    // arrange
    const dice: Die[] = [2, 3, 3, 5, 6];

    // act
    const points = Y.largeStraight(dice);

    // assert
    expect(points).toBe(20);
  });

  it('small straight', () => {
    // arrange
    const dice: Die[] = [1, 2, 3, 4, 5];

    // act
    const points = Y.smallStraight(dice);

    // assert
    expect(points).toBe(15);
  });
});
