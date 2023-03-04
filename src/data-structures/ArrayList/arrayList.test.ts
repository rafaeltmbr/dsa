import { getRandomValues } from "../../util";

import { ArrayList } from ".";

describe("ArrayList class test suite", () => {
  test("it should create an empty array", () => {
    const array = new ArrayList();
    expect(array.length).toEqual(0);
  });

  test("it should return undefined when the array is empty", () => {
    const array = new ArrayList();
    expect(array.pop()).toBeUndefined();
  });

  test("it should be able to push and pop elements", () => {
    const array = new ArrayList();
    const randomValue = Math.random();
    array.push(randomValue);
    expect(array.length).toEqual(1);
    expect(array.pop()).toEqual(randomValue);
    expect(array.length).toEqual(0);
  });

  test("it should be able to pop elements in reverse order", () => {
    const array = new ArrayList();
    const RANDOM_VALUES_COUNT = 40;

    const randomValues = getRandomValues(RANDOM_VALUES_COUNT);
    for (const val of randomValues) array.push(val);

    expect(array.length).toEqual(RANDOM_VALUES_COUNT);

    for (let i = RANDOM_VALUES_COUNT - 1; i >= 0; i -= 1)
      expect(array.pop()).toEqual(randomValues[i]);

    expect(array.length).toEqual(0);
  });

  test("it should allow random access", () => {
    const array = new ArrayList();
    const RANDOM_VALUES_COUNT = 1_000;

    const randomValues = getRandomValues(RANDOM_VALUES_COUNT);
    for (const val of randomValues) array.push(val);

    for (let i = 0; i < randomValues.length; i += 1)
      expect(array.getFromIndex(i)).toEqual(randomValues[i]);

    const randomValue = 10 + Math.random();
    const randomIndex = Math.floor(Math.random() * RANDOM_VALUES_COUNT);
    array.setToIndex(randomIndex, randomValue);

    expect(array.getFromIndex(randomIndex)).toEqual(randomValue);
  });

  test("it should expand and shrink the allocated size", () => {
    const BASE_ALLOCATED_SIZE = 20;
    const EXPANDED_ALLOCATED_SIZE = 2 * BASE_ALLOCATED_SIZE;
    const THRESHOLD_TO_SHRINK_ALLOCATED_SIZE = Math.floor(
      EXPANDED_ALLOCATED_SIZE / 3
    );

    const array = new ArrayList(BASE_ALLOCATED_SIZE);
    expect(array.allocatedSize).toEqual(BASE_ALLOCATED_SIZE);

    for (let i = 0; i <= BASE_ALLOCATED_SIZE; i += 1) array.push(i);

    expect(array.allocatedSize).toEqual(EXPANDED_ALLOCATED_SIZE);

    while (array.length >= THRESHOLD_TO_SHRINK_ALLOCATED_SIZE) array.pop();

    expect(array.allocatedSize).toEqual(BASE_ALLOCATED_SIZE);
  });

  test("it should throw range error when accessing out of bounds", () => {
    const array = new ArrayList();

    array.push(10);

    expect(array.length).toEqual(1);
    expect(array.getFromIndex(0)).toEqual(10);

    expect(() => array.getFromIndex(-1)).toThrowError(RangeError);
    expect(() => array.getFromIndex(2)).toThrowError(RangeError);
    expect(() => array.setToIndex(1, 10)).toThrowError(RangeError);
  });

  test("it should clear the list", () => {
    const array = new ArrayList();
    const RANDOM_VALUES_COUNT = 1_000;

    const randomValues = getRandomValues(RANDOM_VALUES_COUNT);
    for (const val of randomValues) array.push(val);

    expect(array.length).toEqual(RANDOM_VALUES_COUNT);

    array.clear();
    expect(array.length).toEqual(0);
  });
});
