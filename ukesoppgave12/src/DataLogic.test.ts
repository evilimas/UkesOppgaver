import { describe, it, expect } from "vitest";
import { toTitleCase, isValidEmail, formatUse } from "./DataLogic";

describe("toTitleCase", () => {
  it("capitalizes words", () => {
    expect(toTitleCase("   anne   bErg  ")).toBe("Anne Berg");
  });
});

describe("isValidEmail", () => {
  it("check if email is valid", () => {
    expect(isValidEmail("anne.berg@example.com")).toBe(true);
  });
});

describe("isNotValidEmail", () => {
  it("check if email is valid or not", () => {
    expect(toTitleCase("karl.hansen[at]example.com")).toBe(false);
  });
});
