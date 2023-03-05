/**
 * Check if all the characters in a given string appear only once
 * @param str the given string
 * @returns return true if all characters are unique and false otherwise.
 */

export const isUnique = (str: string): boolean => {
  const seen = new Set<string>();

  for (const c of str) {
    if (seen.has(c)) return false;

    seen.add(c);
  }

  return true;
};
