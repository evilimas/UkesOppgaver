import { describe, expect, it } from "vitest";
import type { User } from "./DataLogic_functional";

import {
  isValidEmailFunc,
  toTitleCaseFunc,
  formatUsersFunctional,
  processUsersPipe,
  processUsersCompose,
} from "./DataLogic_functional";

// Functional tests

describe("proceses all users with correct email adress both pipe and compose", () => {
  const users: User[] = [
    { name: "Anne Berg", email: "anne.berg@example.com" },
    { name: "karl hansen", email: "karl.hansen[at]example.com" },
    { name: "   LISA iversen", email: "lisa.iversen@example.com" },
  ];
  // it("check if user are formated correctly", () => {
  //   expect(processUsersPipe(users)).toBe(
  //     "Anne Berg <anne.berg@example.com>, Lisa Iversen <lisa.iversen@example.com>"
  //   );
  // });
  it("check if user are formated correctly", () => {
    expect(processUsersCompose(users)).toBe(
      "Anne Berg <anne.berg@example.com>, Lisa Iversen <lisa.iversen@example.com>"
    );
  });
});
