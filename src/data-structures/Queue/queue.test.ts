import { Queue } from ".";

describe("Queue test suite", () => {
  test("it should add and remove", () => {
    const queue = new Queue<number>();
    queue.add(1).add(2).add(3);

    expect(queue.remove()).toEqual(1);
    expect(queue.remove()).toEqual(2);
    expect(queue.remove()).toEqual(3);
  });

  test("it should check if its empty", () => {
    const queue = new Queue<string>();
    expect(queue.isEmpty()).toBeTruthy();

    expect(queue.add("okay").isEmpty()).toBeFalsy();

    expect(queue.remove()).toBe("okay");
    expect(queue.isEmpty()).toBeTruthy();
  });

  test("it should return null from empty queue", () => {
    const queue = new Queue<Number>();
    expect(queue.remove()).toBeNull();

    const random = Math.random();
    queue.add(random);
    expect(queue.remove()).toBe(random);
    expect(queue.remove()).toBeNull();
  });
});
