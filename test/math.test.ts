import { increment } from "../src/math";
import { describe, expect, test } from "@jest/globals";

describe("math module", () => {
  test("0 increment equal 1", () => {
    expect(increment(0)).toBe(1);
  });
});
