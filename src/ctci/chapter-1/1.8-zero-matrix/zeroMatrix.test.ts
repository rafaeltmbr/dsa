import { zeroMatrix } from ".";

describe("zeroMatrix test suite", () => {
  test("it should support single row matrices", () => {
    const emptyMatrix = [[]];
    zeroMatrix(emptyMatrix);
    expect(emptyMatrix).toEqual([[]]);
  });

  test("it should support one zero", () => {
    const matrix3x1 = [[2, 0, 1]];
    const expectedZeroOutMatrix3x1 = [[0, 0, 0]];
    zeroMatrix(matrix3x1);
    expect(matrix3x1).toEqual(expectedZeroOutMatrix3x1);

    const matrix2x3 = [
      [2, 0],
      [8, 3],
      [7, 4],
    ];
    const expectedZeroOutMatrix2x3 = [
      [0, 0],
      [8, 0],
      [7, 0],
    ];
    zeroMatrix(matrix2x3);
    expect(matrix2x3).toEqual(expectedZeroOutMatrix2x3);

    const matrix4x4 = [
      [2, 7, 12, 893],
      [8, 3, 81, 299],
      [7, 5, 0, 556],
      [1, 4, 30, 110],
    ];
    const expectedZeroOutMatrix4x4 = [
      [2, 7, 0, 893],
      [8, 3, 0, 299],
      [0, 0, 0, 0],
      [1, 4, 0, 110],
    ];
    zeroMatrix(matrix4x4);
    expect(matrix4x4).toEqual(expectedZeroOutMatrix4x4);
  });

  test("it should support multiple zeros", () => {
    const matrix4x4 = [
      [2, 0, 12, 893],
      [8, 3, 81, 299],
      [7, 0, 23, 556],
      [1, 4, 30, 110],
    ];
    const expectedZeroOutMatrix4x4 = [
      [0, 0, 0, 0],
      [8, 0, 81, 299],
      [0, 0, 0, 0],
      [1, 0, 30, 110],
    ];
    zeroMatrix(matrix4x4);
    expect(matrix4x4).toEqual(expectedZeroOutMatrix4x4);

    const matrix5x4 = [
      [2, 9, 0, 893, 44],
      [8, 3, 81, 299, 12],
      [7, 0, 23, 0, 68],
      [1, 4, 30, 110, 20],
    ];
    const expectedZeroOutMatrix5x4 = [
      [0, 0, 0, 0, 0],
      [8, 0, 0, 0, 12],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 20],
    ];
    zeroMatrix(matrix5x4);
    expect(matrix5x4).toEqual(expectedZeroOutMatrix5x4);

    const matrix5x5 = [
      [2, 9, 12, 893, 44],
      [8, 3, 0, 299, 12],
      [7, 4, 23, 0, 68],
      [1, 4, 30, 110, 20],
      [12, 14, 98, 47, 56],
    ];
    const expectedZeroOutMatrix5x5 = [
      [2, 9, 0, 0, 44],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 4, 0, 0, 20],
      [12, 14, 0, 0, 56],
    ];
    zeroMatrix(matrix5x5);
    expect(matrix5x5).toEqual(expectedZeroOutMatrix5x5);
  });

  test("it should support non-zero matrices", () => {
    const matrix4x4 = [
      [2, 9, 12, 893],
      [8, 3, 81, 299],
      [7, 4, 23, 556],
      [1, 4, 30, 110],
    ];
    const expectedZeroOutMatrix4x4 = [
      [2, 9, 12, 893],
      [8, 3, 81, 299],
      [7, 4, 23, 556],
      [1, 4, 30, 110],
    ];
    zeroMatrix(matrix4x4);
    expect(matrix4x4).toEqual(expectedZeroOutMatrix4x4);

    const matrix5x4 = [
      [2, 9, 12, 893, 44],
      [8, 3, 81, 299, 12],
      [7, 4, 23, 556, 68],
      [1, 4, 30, 110, 20],
    ];
    const expectedZeroOutMatrix5x4 = [
      [2, 9, 12, 893, 44],
      [8, 3, 81, 299, 12],
      [7, 4, 23, 556, 68],
      [1, 4, 30, 110, 20],
    ];
    zeroMatrix(matrix5x4);
    expect(matrix5x4).toEqual(expectedZeroOutMatrix5x4);
  });
});
