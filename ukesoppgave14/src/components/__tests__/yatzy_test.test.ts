import { yatzyStore } from "@/stores/yatzyStore";
import { expect, vi, it } from "vitest";
import { beforeEach, describe } from "vitest";
import { setActivePinia, createPinia } from "pinia";

describe("Yatzy Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("changing active player - next Turn", () => {
    const store = yatzyStore();
    store.dice = [1, 1, 1, 1, 1];
    store.activePlayer = 1;
    store.players = 4;
    store.gameStarted = true;
    store.nextTurn("aces");

    expect(store.players).toBe(4);
    expect(store.activePlayer).toBe(2);
  });

  it("check if you get 50 points with 5 same dice - yatzy", () => {
    const store = yatzyStore();
    store.dice = [1, 1, 1, 1, 1];
    store.activePlayer = 1;
    store.gameStarted = true;
    store.throwCount = 2;
    store.placeScore("yatzy");

    expect(store.scoreBoards[0].yatzy).toBe(50);
  });

  it("check if sum, bonus and total works", () => {
    const store = yatzyStore();
    store.scoreBoards[0] = {
      aces: 5,
      twos: 10,
      threes: 15,
      fours: 12,
      fives: 10,
      sixes: 12,
    };

    expect(store.allBoardScores[0].sum).toBe(64);
    expect(store.allBoardScores[0].bonus).toBe(50);
    expect(store.allBoardScores[0].total).toBe(114);
  });

  it("check if sum and no bonus works", () => {
    const store = yatzyStore();
    store.scoreBoards[0] = {
      aces: 1,
      twos: 4,
      threes: 3,
      fours: 8,
      fives: 10,
      sixes: 6,
    };

    expect(store.allBoardScores[0].sum).toBe(32);
    expect(store.allBoardScores[0].bonus).toBe(0);
  });
});

describe("winner() function", () => {
  it("returns single winner text correctly", () => {
    const store = yatzyStore();

    store.scoreBoards[0] = {
      aces: 5,
      twos: 4,
      threes: 9,
      fours: 12,
      fives: 15,
      sixes: 12,
    };
    store.scoreBoards[1] = {
      aces: 2,
      twos: 4,
      threes: 3,
      fours: 8,
      fives: 10,
      sixes: 6,
    };

    expect(store.winner()).toBe("Spiller 1 vinner med 57 poeng");
  });

  it("returns a tie message when players have equal score", () => {
    const store = yatzyStore();
    store.scoreBoards[0] = {
      aces: 5,
      twos: 4,
      threes: 9,
      fours: 12,
      fives: 15,
      sixes: 12,
    };

    store.scoreBoards[1] = {
      aces: 5,
      twos: 4,
      threes: 9,
      fours: 12,
      fives: 15,
      sixes: 12,
    };

    expect(store.winner()).toBe("Det er uavgjort mellom spillerne 1, 2 med en poengsum på 57");
  });
  it("check new game button works", () => {
    const store = yatzyStore();

    store.scoreBoards[0] = {
      aces: 5,
      twos: 4,
      threes: 9,
      fours: 12,
      fives: 15,
      sixes: 12,
    };
    store.scoreBoards[1] = {
      aces: 2,
      twos: 4,
      threes: 3,
      fours: 8,
      fives: 10,
      sixes: 6,
    };
    store.resetGame();
    expect(store.dice).toEqual([null, null, null, null, null]);
    expect(store.scoreBoards[0].aces).toBeNull();
    expect(store.activePlayer).toBe(1);
    expect(store.gameStarted).toBe(false);
  });
});

