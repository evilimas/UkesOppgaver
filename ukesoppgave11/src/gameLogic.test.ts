import { describe, it, expect } from 'vitest';
import { countDie, nOfAKind } from './gameLogic.ts';

describe('countDie', () => {
  it('count the times of the same die', () => {
    const dice = [1, 2, 3, 3, 3, 4];

    expect(countDie(dice).toEqual({ 1: 1, 2: 1, 3: 3, 4: 1 }));
  });
});
