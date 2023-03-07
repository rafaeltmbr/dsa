const getFinalLength = (s: string[], length: number): number => {
  let spaces = 0;

  for (let i = 0; i < length; i += 1) if (s[i] === " ") spaces += 1;

  return length + spaces * 2;
};

/**
 * Replace all spaces by %20 (in place) in a given string
 * @param s the given string to be urlified
 */

export const URLify = (s: string[], length: number): void => {
  const finalLength = getFinalLength(s, length);

  for (
    let i = length - 1, j = finalLength - 1;
    i >= 0 && j >= 0;
    i -= 1, j -= 1
  ) {
    if (s[i] !== " ") {
      s[j] = s[i];
      continue;
    }

    s[j] = "0";
    s[j - 1] = "2";
    s[j - 2] = "%";

    j -= 2;
  }
};
