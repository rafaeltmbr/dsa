import { rotateMatrix } from ".";

describe("rotateMatrix test suite", () => {
  test("it should support an 1x1 matrix", () => {
    const original: number[][] = [[1]];
    const expected: number[][] = [[1]];

    rotateMatrix(original);
    expect(original).toEqual(expected);
  });

  test("it should support an 2x2 matrix", () => {
    const original: number[][] = [
      [1, 2],
      [3, 4],
    ];
    const expected: number[][] = [
      [3, 1],
      [4, 2],
    ];

    rotateMatrix(original);
    expect(original).toEqual(expected);
  });

  test("it should support an 3x3 matrix", () => {
    const original: number[][] = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expected: number[][] = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ];

    rotateMatrix(original);
    expect(original).toEqual(expected);
  });

  test("it should support an 4x4 matrix", () => {
    const original: number[][] = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    const expected: number[][] = [
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4],
    ];

    rotateMatrix(original);
    expect(original).toEqual(expected);
  });

  test("it should support an 5x5 matrix", () => {
    const original: number[][] = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];
    const expected: number[][] = [
      [21, 16, 11, 6, 1],
      [22, 17, 12, 7, 2],
      [23, 18, 13, 8, 3],
      [24, 19, 14, 9, 4],
      [25, 20, 15, 10, 5],
    ];

    rotateMatrix(original);
    expect(original).toEqual(expected);
  });

  test("it should support an 8x8 matrix", () => {
    const original: number[][] = [
      [1, 2, 3, 4, 5, 6, 7, 8],
      [9, 10, 11, 12, 13, 14, 15, 16],
      [17, 18, 19, 20, 21, 22, 23, 24],
      [25, 26, 27, 28, 29, 30, 31, 32],
      [33, 34, 35, 36, 37, 38, 39, 40],
      [41, 42, 43, 44, 45, 46, 47, 48],
      [49, 50, 51, 52, 53, 54, 55, 56],
      [57, 58, 59, 60, 61, 62, 63, 64],
    ];
    const expected: number[][] = [
      [57, 49, 41, 33, 25, 17, 9, 1],
      [58, 50, 42, 34, 26, 18, 10, 2],
      [59, 51, 43, 35, 27, 19, 11, 3],
      [60, 52, 44, 36, 28, 20, 12, 4],
      [61, 53, 45, 37, 29, 21, 13, 5],
      [62, 54, 46, 38, 30, 22, 14, 6],
      [63, 55, 47, 39, 31, 23, 15, 7],
      [64, 56, 48, 40, 32, 24, 16, 8],
    ];

    rotateMatrix(original);
    expect(original).toEqual(expected);
  });

  test("it should not expect an empty matrix", () => {
    const original: number[][] = [];

    expect(() => rotateMatrix(original)).toThrowError(Error);
  });

  test("it should not accept an non-square matrix", () => {
    const matrix1: number[][] = [
      [1, 2, 3],
      [4, 5, 6],
    ];

    const matrix2: number[][] = [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ];

    const matrix3: number[][] = [
      [1, 2, 3],
      [4, 5],
      [6, 7, 8],
    ];

    expect(() => rotateMatrix(matrix1)).toThrowError(Error);
    expect(() => rotateMatrix(matrix2)).toThrowError(Error);
    expect(() => rotateMatrix(matrix3)).toThrowError(Error);
  });
});
