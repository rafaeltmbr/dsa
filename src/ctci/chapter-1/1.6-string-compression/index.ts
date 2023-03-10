/**
 * Compress the given string by its characters frequency. For example:
 * aaabbcccc -> a3b2c4
 * aaaA -> aaaA
 * @param s string ranging from a-z upper and lower case
 * @returns the compressed string if its smaller than the given string,
 *          otherwise, return the given string.
 */

import { StringBuilder } from "../../../data-structures";

export const compressString = (s: string): string => {
  if (s.length <= 2) return s;

  const sb = new StringBuilder();

  let char = s[0];
  let count = 1;

  for (let i = 1; i < s.length; i += 1) {
    if (s[i] === char) {
      count += 1;
      continue;
    }

    sb.concat(`${char}${count}`);
    char = s[i];
    count = 1;
  }

  sb.concat(`${char}${count}`);

  const compressed = sb.toString();

  return compressed.length < s.length ? compressed : s;
};
