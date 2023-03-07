import { URLify } from ".";

interface IGetMessageResponse {
  msg: string[];
  length: number;
}

const getMessage = (s: string): IGetMessageResponse => {
  const msg = s.split("");
  const length = msg.length;
  const spaces = msg.reduce((acc, e) => (e === " " ? acc + 1 : acc), 0);

  for (let i = 0; i < spaces; i += 1) msg.push(" ", " ");

  return { msg, length };
};

const getUrlified = (msg: string[], length: number): string => {
  URLify(msg, length);
  return msg.join("");
};

describe("URLify test suite", () => {
  test("it should work on empty strings", () => {
    const { msg, length } = getMessage("");
    const urlified = getUrlified(msg, length);

    expect(urlified).toEqual("");
  });

  test("it should work on single char", () => {
    const { msg, length } = getMessage("c");
    const urlified = getUrlified(msg, length);

    expect(urlified).toEqual("c");
  });

  test("it should work on single space", () => {
    const { msg, length } = getMessage(" ");
    const urlified = getUrlified(msg, length);

    expect(urlified).toEqual("%20");
  });

  test("it should work on multiple spaces", () => {
    const { msg, length } = getMessage("All right babe ");
    const urlified = getUrlified(msg, length);

    expect(urlified).toEqual("All%20right%20babe%20");
  });

  test("it should ignore non-space whitespace", () => {
    const { msg, length } = getMessage("Let us\tgo");
    const urlified = getUrlified(msg, length);

    expect(urlified).toEqual("Let%20us\tgo");
  });

  test("it should respect the given length", () => {
    const { msg, length } = getMessage("All right babe ");
    const urlified = getUrlified(msg, length - 1);

    expect(urlified).toEqual("All%20right%20babe   ");
  });
});
