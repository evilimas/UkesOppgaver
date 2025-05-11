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
    const points = Y.pointsUpper(counts);
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

  it('par i 1 og 3 ', () => {
    // arrange
    const dice: Die[] = [1, 1, 2, 3, 3];

    // act
    const points = Y.pointsToPairs(dice);

    // assert
    expect(points).toBe(8);
  });

  it('Par i 3 og 5', () => {
    // arrange
    const dice: Die[] = [3, 5, 3, 4, 5];

    // act
    const points = Y.pointsToPairs(dice);

    // assert
    expect(points).toBe(16);
  });

  it('House', () => {
    // arrange
    const dice: Die[] = [2, 2, 3, 3, 3];

    // act
    const points = Y.pointsHouse(dice);

    // assert
    expect(points).toBe(13);
  });
});
