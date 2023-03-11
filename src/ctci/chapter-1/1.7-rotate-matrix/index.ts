const rotateCornors = <T>(m: T[][], i: number, j: number): void => {
  const size = m.length;
  const decreaseWithI = size - i - 1;
  const decreaseWithJ = size - j - 1;

  const temp = m[i][j];
  m[i][j] = m[decreaseWithJ][i]; // top
  m[decreaseWithJ][i] = m[decreaseWithI][decreaseWithJ]; // left
  m[decreaseWithI][decreaseWithJ] = m[j][decreaseWithI]; // bottom
  m[j][decreaseWithI] = temp; // right
};

const isSquareMatrix = <T>(m: T[][]): boolean => {
  const size = m.length;

  for (const row of m) if (row.length !== size) return false;

  return true;
};

/**
 * Rotate a square matrix by 90 deg in place
 * @param m square matrix
 */

export const rotateMatrix = <T>(m: T[][]): void => {
  if (m.length < 1 || !isSquareMatrix(m)) throw Error("Invalid matrix");

  const size = m.length;

  for (let i = 0; i < size - 1; i += 1)
    for (let j = i; j < size - i - 1; j += 1) rotateCornors(m, i, j);
};
