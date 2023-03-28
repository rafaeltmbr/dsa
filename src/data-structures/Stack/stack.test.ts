import { Stack } from ".";

describe("Stack test suite", () => {
  test("add and pop items to the stack", () => {
    const stack = new Stack<Number>();
    stack.push(1).push(2).push(3);

    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
  });

  test("it should check if its empty", () => {
    const stack = new Stack<string>();
    expect(stack.isEmpty()).toBeTruthy();

    expect(stack.push("okay").isEmpty()).toBeFalsy();

    expect(stack.pop()).toBe("okay");
    expect(stack.isEmpty()).toBeTruthy();
  });

  test("it should return null when poping and empty stack", () => {
    const stack = new Stack<Number>();
    expect(stack.pop()).toBeNull();

    const random = Math.random();
    stack.push(random);
    expect(stack.pop()).toBe(random);
    expect(stack.pop()).toBeNull();
  });
});
