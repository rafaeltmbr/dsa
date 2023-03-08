export const isPalindromePermutation = (s: string): boolean => {
  const countMap = new Map<string, number>();

  for (const c of s) if (c !== " ") countMap.set(c, (countMap.get(c) || 0) + 1);

  let foundOddCount = false;

  for (const [, count] of countMap) {
    if (count % 2 === 0) continue;

    if (foundOddCount) return false;

    foundOddCount = true;
  }

  return true;
};
