import { checkPermutation } from ".";

describe("Check Permutation test suite", () => {
  test("it should return true for equal strings", () => {
    expect(checkPermutation("", "")).toBe(true);
    expect(checkPermutation(" ", " ")).toBe(true);
    expect(checkPermutation("a", "a")).toBe(true);
    expect(checkPermutation("okay", "okay")).toBe(true);
    expect(checkPermutation("it's", "okay")).toBe(false);
  });

  test("it should return false for different string sizes", () => {
    expect(checkPermutation("kay", "Okay")).toBe(false);
    expect(checkPermutation(" ", "")).toBe(false);
    expect(checkPermutation("okay", "okay ")).toBe(false);
    expect(checkPermutation("okay", "okay")).toBe(true);
  });

  test("it should make case sensitive comparisons", () => {
    expect(checkPermutation("A12", "a12")).toBe(false);
    expect(checkPermutation("okay", "Okay")).toBe(false);
    expect(checkPermutation("Okay", "Okay")).toBe(true);
  });
});
