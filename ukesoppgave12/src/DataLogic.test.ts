import { describe, expect, it } from "vitest";
import type { User } from "./DataLogic_functional";
import { formatUsersImperative, isValidEmail, toTitleCase } from "./DataLogic_imperativ";

import {
  isValidEmailFunc,
  toTitleCaseFunc,
  formatUsersFunctional,
  processUsers,
} from "./DataLogic_functional";

// Imperativ tests
describe("toTitleCase imperative", () => {
  it("capitalizes words", () => {
    expect(toTitleCase("   anne   bErg  ")).toBe("Anne Berg");
  });
});

describe("isValidEmail imperative", () => {
  const validEmail = "anne.berg@example.com";
  const invalidEmail = "karl.hansen[at]example.com";
  it("check if vaild email is valid", () => {
    expect(isValidEmail(validEmail)).toBe(true);
  });
  it("check if invaild email is valid", () => {
    expect(isValidEmail(invalidEmail)).toBe(false);
  });
});

describe("formatUsers impoerative", () => {
  const users = [
    { name: "   anne   BErg  ", email: "anne.berg@example.com" },
    { name: "   LISA iversen", email: "lisa.iversen@example.com" },
  ];
  const result = "Anne Berg <anne.berg@example.com>, Lisa Iversen <lisa.iversen@example.com>";

  it("check if user are formated correctly", () => {
    expect(formatUsersImperative(users)).toBe(result);
  });
});

// Functional tests

describe("isValidEmail functional", () => {
  const validEmail = "anne.berg@example.com";
  const invalidEmail = "karl.hansen[at]example.com";
  it("check if vaild email is valid", () => {
    expect(isValidEmailFunc(validEmail)).toBe(true);
  });
  it("check if invaild email is valid", () => {
    expect(isValidEmailFunc(invalidEmail)).toBe(false);
  });
});
describe("toTitleCase functional", () => {
  it("capitalizes words", () => {
    expect(toTitleCaseFunc("   anne   bErg  ")).toBe("Anne Berg");
  });
});
describe("formatUsers functional", () => {
  const user = { name: "Anne Berg", email: "anne.berg@example.com" };
  it("check if user are formated correctly", () => {
    expect(formatUsersFunctional(user)).toBe("Anne Berg <anne.berg@example.com>");
  });
});

describe("proceses all users with correct email adress", () => {
  const users: User[] = [
    { name: "Anne Berg", email: "anne.berg@example.com" },
    { name: "karl hansen", email: "karl.hansen[at]example.com" },
    { name: "   LISA iversen", email: "lisa.iversen@example.com" },
  ];
  it("check if user are formated correctly", () => {
    expect(processUsers(users)).toBe(
      "Anne Berg <anne.berg@example.com>, Lisa Iversen <lisa.iversen@example.com>"
    );
  });
});
