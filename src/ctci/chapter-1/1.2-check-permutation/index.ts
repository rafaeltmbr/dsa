/**
 * Check if one string is the permutation of the other
 * @param s1 first string
 * @param s2 second string
 * @returns return true if s1 is a permutation of s2
 */
export const checkPermutation = (s1: string, s2: string): boolean => {
  if (s1.length !== s2.length) return false;

  const map = getCharFrequencyMap(s1);

  for (const c of s2) {
    const count = map.get(c);
    if (!count) return false;

    map.set(c, count - 1);
  }

  return true;
};

const getCharFrequencyMap = (s: string): Map<string, number> => {
  const map = new Map<string, number>();

  for (const c of s) map.set(c, (map.get(c) || 0) + 1);

  return map;
};
