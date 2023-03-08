import { isPalindromePermutation } from ".";

describe("isPalindromePermutation test suite", () => {
  test("it should return true for empty string", () => {
    expect(isPalindromePermutation("")).toBe(true);
  });

  test("it should ignore whitespaces", () => {
    expect(isPalindromePermutation(" ")).toBe(true);
    expect(isPalindromePermutation("a a")).toBe(true);
    expect(isPalindromePermutation("a  a")).toBe(true);
    expect(isPalindromePermutation(" a  a")).toBe(true);
    expect(isPalindromePermutation(" aa c")).toBe(true);
    expect(isPalindromePermutation(" aa cd")).toBe(false);
  });

  test("it should return true for palindromes", () => {
    expect(isPalindromePermutation("a")).toBe(true);
    expect(isPalindromePermutation("bob")).toBe(true);
    expect(isPalindromePermutation("1a1")).toBe(true);
    expect(isPalindromePermutation("d1a d1")).toBe(true);
    expect(isPalindromePermutation("wo wow")).toBe(true);
    expect(isPalindromePermutation("wow wow")).toBe(true);
    expect(isPalindromePermutation("wow w")).toBe(false);
  });

  test("it should return true for palindrome permutations", () => {
    expect(isPalindromePermutation("g 11")).toBe(true);
    expect(isPalindromePermutation("gog ooo")).toBe(true);
    expect(isPalindromePermutation("fine nife")).toBe(true);
    expect(isPalindromePermutation("dog go")).toBe(true);
    expect(isPalindromePermutation("god dog")).toBe(true);
    expect(isPalindromePermutation("god dod")).toBe(false);
  });

  test("is should return false for all non palindrome permutations", () => {
    expect(isPalindromePermutation("yo")).toBe(false);
    expect(isPalindromePermutation("rizz")).toBe(false);
    expect(isPalindromePermutation("all ice")).toBe(false);
    expect(isPalindromePermutation("zyzzy")).toBe(true);
  });

  test("is should be case-sensitive", () => {
    expect(isPalindromePermutation("a A")).toBe(false);
    expect(isPalindromePermutation("Bob")).toBe(false);
    expect(isPalindromePermutation("Fine Nife")).toBe(false);
    expect(isPalindromePermutation("Fine niFe")).toBe(true);
  });
});
