import { SetOfStacks } from ".";

describe("SetOfStacks test suite", () => {
  test("it should create another stack when it overflows the stack size", () => {
    const setOfStacks = new SetOfStacks<number>(2);
    expect(setOfStacks.isEmpty()).toEqual(true);
    expect(setOfStacks.top()).toBeNull();
    expect(setOfStacks.stacksLength()).toEqual(0);

    setOfStacks.push(1);
    expect(setOfStacks.isEmpty()).toEqual(false);
    expect(setOfStacks.top()).toEqual(1);
    expect(setOfStacks.stacksLength()).toEqual(1);

    setOfStacks.push(2);
    expect(setOfStacks.isEmpty()).toEqual(false);
    expect(setOfStacks.top()).toEqual(2);
    expect(setOfStacks.stacksLength()).toEqual(1);

    setOfStacks.push(3);
    expect(setOfStacks.isEmpty()).toEqual(false);
    expect(setOfStacks.top()).toEqual(3);
    expect(setOfStacks.stacksLength()).toEqual(2);

    setOfStacks.push(4);
    expect(setOfStacks.isEmpty()).toEqual(false);
    expect(setOfStacks.top()).toEqual(4);
    expect(setOfStacks.stacksLength()).toEqual(2);

    setOfStacks.push(5);
    expect(setOfStacks.isEmpty()).toEqual(false);
    expect(setOfStacks.top()).toEqual(5);
    expect(setOfStacks.stacksLength()).toEqual(3);

    expect(setOfStacks.pop()).toEqual(5);
    expect(setOfStacks.isEmpty()).toEqual(false);
    expect(setOfStacks.top()).toEqual(4);
    expect(setOfStacks.stacksLength()).toEqual(2);

    expect(setOfStacks.pop()).toEqual(4);
    expect(setOfStacks.isEmpty()).toEqual(false);
    expect(setOfStacks.top()).toEqual(3);
    expect(setOfStacks.stacksLength()).toEqual(2);

    expect(setOfStacks.pop()).toEqual(3);
    expect(setOfStacks.isEmpty()).toEqual(false);
    expect(setOfStacks.top()).toEqual(2);
    expect(setOfStacks.stacksLength()).toEqual(1);

    expect(setOfStacks.pop()).toEqual(2);
    expect(setOfStacks.isEmpty()).toEqual(false);
    expect(setOfStacks.top()).toEqual(1);
    expect(setOfStacks.stacksLength()).toEqual(1);

    expect(setOfStacks.pop()).toEqual(1);
    expect(setOfStacks.isEmpty()).toEqual(true);
    expect(setOfStacks.top()).toBeNull();
    expect(setOfStacks.stacksLength()).toEqual(0);
  });

  test("it should return null when poping an empty stack", () => {
    const setOfStacks = new SetOfStacks<string>(1);
    expect(setOfStacks.pop()).toBeNull();

    setOfStacks.push("okay");
    expect(setOfStacks.pop()).toEqual("okay");
    expect(setOfStacks.pop()).toBeNull();
  });
});
