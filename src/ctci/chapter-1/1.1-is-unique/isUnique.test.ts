import { isUnique } from ".";

describe("1.1 - Is unique test suite", () => {
  test("it should return true for empty or single char strings", () => {
    expect(isUnique("")).toBeTruthy();
    expect(isUnique("a")).toBeTruthy();
  });

  test("it should be case sensitive", () => {
    expect(isUnique("abc")).toBeTruthy();
    expect(isUnique("abA")).toBeTruthy();
    expect(isUnique("AbA")).toBeFalsy();
  });

  test("it should return false for repeated characters", () => {
    expect(isUnique("abcdeA123dE")).toBeFalsy();
    expect(isUnique("akjlrfd12lsa")).toBeFalsy();
    expect(isUnique("GGG")).toBeFalsy();
    expect(isUnique("  ")).toBeFalsy();
    expect(isUnique(" ")).toBeTruthy();
  });

  test("it should accept unicode characters", () => {
    expect(isUnique("😁😜-❤🎉")).toBeTruthy();
    expect(isUnique("😁😜-😜🎉")).toBeFalsy();
    expect(isUnique("😁😜🎉😎😁🎶")).toBeFalsy();
    expect(isUnique("😁😜🎉😎👀🎶")).toBeTruthy();
  });
});
