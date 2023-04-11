import { Heap } from ".";

describe("Heap test suite", () => {
  test("it should tell when its empty", () => {
    const heap = new Heap<number>();
    expect(heap.isEmpty()).toBe(true);

    heap.insert(Math.random());
    expect(heap.isEmpty()).toBe(false);

    heap.extractRoot();
    expect(heap.isEmpty()).toBe(true);
  });

  test("it should get the root element without removing it", () => {
    const heap = new Heap<number>();
    expect(heap.isEmpty()).toBe(true);
    expect(heap.getRoot()).toBeNull();

    const random = Math.random();
    heap.insert(random);
    expect(heap.isEmpty()).toBe(false);
    expect(heap.getRoot()).toEqual(random);
    expect(heap.getRoot()).toEqual(random);

    expect(heap.extractRoot()).toEqual(random);
    expect(heap.getRoot()).toBeNull();
    expect(heap.extractRoot()).toBeNull();
    expect(heap.isEmpty()).toBe(true);
  });

  test("it should default to a min heap", () => {
    const heap = new Heap<number>();
    heap.insert(10).insert(5).insert(17.2);

    expect(heap.extractRoot()).toEqual(5);
    expect(heap.extractRoot()).toEqual(10);
    expect(heap.extractRoot()).toEqual(17.2);
    expect(heap.extractRoot()).toBeNull();
  });

  test("it should work as a min or max heap based on the comparison function", () => {
    const minHeap = new Heap<number>((a, b) => a - b);
    minHeap.insert(10).insert(5).insert(17.2);

    expect(minHeap.extractRoot()).toEqual(5);
    expect(minHeap.extractRoot()).toEqual(10);
    expect(minHeap.extractRoot()).toEqual(17.2);
    expect(minHeap.extractRoot()).toBeNull();

    const maxHeap = new Heap<number>((a, b) => b - a);
    maxHeap.insert(10).insert(5).insert(17.2);

    expect(maxHeap.extractRoot()).toEqual(17.2);
    expect(maxHeap.extractRoot()).toEqual(10);
    expect(maxHeap.extractRoot()).toEqual(5);
    expect(maxHeap.extractRoot()).toBeNull();
  });

  test("it should insert and remove in order", () => {
    const TOTAL_NUMBERS = 1_000;
    const minHeap = new Heap<number>();

    for (let i = 0; i < TOTAL_NUMBERS; i += 1) minHeap.insert(i);

    const extractedNumbers: number[] = [];

    while (!minHeap.isEmpty()) {
      const extracted = minHeap.extractRoot();
      expect(extracted).not.toBeNull();
      expect(extracted).toBeGreaterThanOrEqual(extractedNumbers.at(-1) || 0);
      extractedNumbers.push(extracted as number);
    }

    expect(extractedNumbers.length).toEqual(TOTAL_NUMBERS);
  });

  test("it should work with any kind of data", () => {
    const minHeap = new Heap<string>();
    minHeap.insert("b").insert("c").insert("a").insert("d").insert("c");

    expect(minHeap.extractRoot()).toBe("a");
    expect(minHeap.extractRoot()).toBe("b");
    expect(minHeap.extractRoot()).toBe("c");
    expect(minHeap.extractRoot()).toBe("c");
    expect(minHeap.extractRoot()).toBe("d");
    expect(minHeap.extractRoot()).toBeNull();
  });
});
