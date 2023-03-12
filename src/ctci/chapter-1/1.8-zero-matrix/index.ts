/**
 * if an element in the matrix is zero, its entire row and column are set to zero.
 * @param matrix the MxN matrix of numbers
 */

export const zeroMatrix = (matrix: number[][]): void => {
  const zeroOutRows = new Set<number>();
  const zeroOutColumns = new Set<number>();

  for (let i = 0; i < matrix.length; i += 1)
    for (let j = 0; j < matrix[i].length; j += 1)
      if (matrix[i][j] === 0) {
        zeroOutRows.add(i);
        zeroOutColumns.add(j);
      }

  for (let i = 0; i < matrix.length; i += 1)
    for (let j = 0; j < matrix[i].length; j += 1)
      if (zeroOutRows.has(i) || zeroOutColumns.has(j)) matrix[i][j] = 0;
};
