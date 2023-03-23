import { LinkedList } from "../../../data-structures";

import { palindrome } from ".";

describe("palindrome test suite", () => {
  test("it should accept empty lists", () => {
    expect(palindrome(new LinkedList())).toBe(true);
  });

  test("it should accept single element lists", () => {
    const list = new LinkedList<number>();

    list.addToTail(10);
    expect(palindrome(list)).toBe(true);
  });

  test("it should accept palindromes", () => {
    const list = new LinkedList<number>();

    list.addToTail(10);
    expect(palindrome(list)).toBe(true);

    list.addArrayToTail([11, 10]);
    expect(palindrome(list)).toBe(true);

    list.addArrayToTail([10, 11, 10]);
    expect(palindrome(list)).toBe(true);
  });

  test("it should accept nonpalindromes", () => {
    const list = new LinkedList<string>();
    list.addArrayToTail(["okay", "let's"]);
    expect(palindrome(list)).toBe(false);

    list.addArrayToTail(["okay", "let's", "let's"]);
    expect(palindrome(list)).toBe(false);
  });
});
