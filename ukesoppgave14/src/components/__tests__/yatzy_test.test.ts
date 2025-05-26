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

  it("check if total works", () => {
    const store = yatzyStore();
    store.dice = [1, 1, 1, 1, 1];
    const Scoreboard = store.scoreBoards[0];
    store.activePlayer = 1;
    store.gameStarted = true;
    store.throwCount = 2;
    store.nextTurn("yatzy");
    Scoreboard.yatzy = 50;

    expect(store.allBoardScores[0].total).toBe(50);
  });

  it("check sum and bonus works", () => {
    const store = yatzyStore();
    store.dice = [1, 1, 1, 1, 1];
    const Scoreboard = store.scoreBoards[0];
    store.activePlayer = 1;
    store.gameStarted = true;
    store.throwCount = 2;
    Scoreboard.aces = 5;
    Scoreboard.twos = 10;
    Scoreboard.threes = 15;
    Scoreboard.fours = 20;
    Scoreboard.fives = 25;
    Scoreboard.sixes = 30;

    expect(store.allBoardScores[0].sum).toBe(105);
    expect(store.allBoardScores[0].bonus).toBe(50);
  });
});
