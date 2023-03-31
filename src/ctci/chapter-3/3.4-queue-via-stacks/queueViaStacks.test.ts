import { MyQueue } from ".";

describe("Queue via Stacks test suite", () => {
  test("it should enqueue and dequeue the elements in the correct order", () => {
    const queue = new MyQueue<number>();
    expect(queue.head()).toBeNull();
    expect(queue.isEmpty()).toBe(true);

    queue.enqueue(1);
    expect(queue.head()).toEqual(1);
    expect(queue.isEmpty()).toBe(false);

    queue.enqueue(2);
    expect(queue.head()).toEqual(1);
    expect(queue.isEmpty()).toBe(false);

    queue.enqueue(3);
    expect(queue.head()).toEqual(1);
    expect(queue.isEmpty()).toBe(false);

    expect(queue.dequeue()).toEqual(1);
    expect(queue.head()).toEqual(2);
    expect(queue.isEmpty()).toBe(false);

    expect(queue.dequeue()).toEqual(2);
    expect(queue.head()).toEqual(3);
    expect(queue.isEmpty()).toBe(false);

    expect(queue.dequeue()).toEqual(3);
    expect(queue.head()).toEqual(null);
    expect(queue.isEmpty()).toBe(true);
  });

  test("it should return nulll when dequeueing an empty queue", () => {
    const queue = new MyQueue<string>();
    expect(queue.head()).toBeNull();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.dequeue()).toBeNull();

    queue.enqueue("okay");
    expect(queue.head()).toEqual("okay");
    expect(queue.isEmpty()).toBe(false);

    expect(queue.dequeue()).toEqual("okay");
    expect(queue.head()).toBeNull();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.dequeue()).toBeNull();
  });
});
