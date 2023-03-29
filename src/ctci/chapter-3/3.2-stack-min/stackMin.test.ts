import { StackMin } from ".";

describe("Stack Min test suite", () => {
  test("it should push and pop from the stack while keeping track of the min value", () => {
    const stack = new StackMin<number>((a, b) => a - b);

    stack.push(2);
    expect(stack.top()).toEqual(2);
    expect(stack.min()).toEqual(2);

    stack.push(-1);
    expect(stack.top()).toEqual(-1);
    expect(stack.min()).toEqual(-1);

    stack.push(5);
    expect(stack.top()).toEqual(5);
    expect(stack.min()).toEqual(-1);

    stack.push(0);
    expect(stack.top()).toEqual(0);
    expect(stack.min()).toEqual(-1);

    stack.push(-2);
    expect(stack.top()).toEqual(-2);
    expect(stack.min()).toEqual(-2);

    expect(stack.pop()).toBe(-2);
    expect(stack.min()).toBe(-1);

    expect(stack.pop()).toBe(0);
    expect(stack.min()).toBe(-1);

    expect(stack.pop()).toBe(5);
    expect(stack.min()).toBe(-1);

    expect(stack.pop()).toBe(-1);
    expect(stack.min()).toBe(2);

    expect(stack.pop()).toBe(2);
    expect(stack.min()).toBe(null);
  });

  test("it should implement isEmpty function which returns true when the stack is empty", () => {
    const stack = new StackMin<number>((a, b) => a - b);

    expect(stack.isEmpty()).toBeTruthy();
    expect(stack.top()).toBeNull();
    expect(stack.min()).toBeNull();

    const random = Math.random();
    stack.push(random);

    expect(stack.isEmpty()).toBeFalsy();
    expect(stack.top()).toEqual(random);
    expect(stack.min()).toEqual(random);

    expect(stack.pop()).toEqual(random);

    expect(stack.isEmpty()).toBeTruthy();
    expect(stack.top()).toBeNull();
    expect(stack.min()).toBeNull();
  });

  test("it should return null when poping or getting the min value of an empty stack", () => {
    const stack = new StackMin<string>((a, b) =>
      a < b ? -1 : a === b ? 0 : 1
    );

    expect(stack.isEmpty()).toBeTruthy();
    expect(stack.top()).toBeNull();
    expect(stack.min()).toBeNull();
    expect(stack.pop()).toBeNull();

    stack.push("okay");
    expect(stack.isEmpty()).toBeFalsy();
    expect(stack.top()).toEqual("okay");
    expect(stack.min()).toEqual("okay");
    expect(stack.pop()).toEqual("okay");

    expect(stack.isEmpty()).toBeTruthy();
    expect(stack.top()).toBeNull();
    expect(stack.min()).toBeNull();
    expect(stack.pop()).toBeNull();
  });
});
