import { oneAway } from ".";

describe("oneAway test suite", () => {
  test("it should support empty strings", () => {
    expect(oneAway("", "")).toBe(true);
    expect(oneAway("", "a")).toBe(true);
    expect(oneAway("b", "")).toBe(true);
    expect(oneAway("  ", "")).toBe(false);
  });

  test("it should be case-sensitve", () => {
    expect(oneAway("Ab", "aB")).toBe(false);
    expect(oneAway("AB", "aB")).toBe(true);
    expect(oneAway("a", " A")).toBe(false);
    expect(oneAway("a", " a")).toBe(true);
    expect(oneAway("pale", "Pale")).toBe(true);
    expect(oneAway("palE", "Pale")).toBe(false);
  });

  test("it should return true for the same string", () => {
    expect(oneAway("abc", "abc")).toBe(true);
    expect(oneAway("  ", "  ")).toBe(true);
    expect(oneAway("", "")).toBe(true);
    expect(oneAway("min", "max")).toBe(false);
  });

  test("it should return true for one edit away", () => {
    expect(oneAway("win", "bin")).toBe(true);
    expect(oneAway("fine", "wine")).toBe(true);
    expect(oneAway("tba", "nba")).toBe(true);
    expect(oneAway("bazz", "bar")).toBe(false);
  });

  test("it should return false for more than one edit away", () => {
    expect(oneAway("bazz", "bar")).toBe(false);
    expect(oneAway("deep", "down")).toBe(false);
    expect(oneAway("a", " a ")).toBe(false);
    expect(oneAway("", "  ")).toBe(false);
    expect(oneAway("okay let's go", "ok lets go")).toBe(false);
  });
});
