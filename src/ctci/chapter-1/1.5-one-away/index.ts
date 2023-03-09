/**
 * Return true if one string is at most one edit away from the other
 * @param s1 string 1
 * @param s2 string 2
 * @returns true if the are at most one edit away
 */

const sameSizeOneAway = (s1: string, s2: string): boolean => {
  let changeCount = 0;

  for (let i = 0; i < s1.length; i += 1) {
    if (s1[i] !== s2[i]) changeCount += 1;

    if (changeCount > 1) return false;
  }

  return true;
};

const differentSizeOneAway = (s1: string, s2: string): boolean => {
  let bigger = s1.length > s2.length ? s1 : s2;
  let smaller = s1.length < s2.length ? s1 : s2;
  let changeCount = 0;

  for (let i = 0, j = 0; i < bigger.length && j < smaller.length; i += 1) {
    if (bigger[i] === smaller[j]) {
      j += 1;
      continue;
    }

    changeCount += 1;

    if (changeCount > 1) return false;
  }

  return true;
};

export const oneAway = (s1: string, s2: string): boolean => {
  const diff = Math.abs(s1.length - s2.length);
  if (diff > 1) return false;

  if (!diff) return sameSizeOneAway(s1, s2);

  return differentSizeOneAway(s1, s2);
};
