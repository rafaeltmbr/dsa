import { Stack } from "../../../data-structures/Stack";

import { sortStack } from ".";

describe("sortStack test suite", () => {
  test("it should sort empty stack", () => {
    const stack = new Stack<number>();
    sortStack(stack);
    expect(stack.isEmpty()).toBe(true);
  });

  test("it should sort a single item stack", () => {
    const stack = new Stack<number>();
    const random = Math.random();
    stack.push(random);

    expect(stack.peek()).toBe(random);
    expect(stack.isEmpty()).toBe(false);

    sortStack(stack);

    expect(stack.pop()).toBe(random);
    expect(stack.isEmpty()).toBe(true);
  });

  test("it should sort two items stack", () => {
    const stack = new Stack<number>();
    stack.push(1).push(2);

    expect(stack.peek()).toBe(2);
    expect(stack.isEmpty()).toBe(false);

    sortStack(stack);

    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(2);
    expect(stack.isEmpty()).toBe(true);
  });

  test("it should sort multiple items stack", () => {
    const stack = new Stack<number>();
    stack.push(1).push(2).push(5).push(3).push(4);

    expect(stack.peek()).toBe(4);
    expect(stack.isEmpty()).toBe(false);

    sortStack(stack);

    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(5);
    expect(stack.isEmpty()).toBe(true);
  });

  test("it should sort an already sorted stack", () => {
    const stack = new Stack<number>();
    stack.push(4).push(3).push(3).push(2).push(1);

    expect(stack.peek()).toBe(1);
    expect(stack.isEmpty()).toBe(false);

    sortStack(stack);

    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(4);
    expect(stack.isEmpty()).toBe(true);
  });
});
