import { StringBuilder } from ".";

describe("StringBuilder test suite", () => {
  test("it should create and empty string", () => {
    const sb = new StringBuilder();

    expect(sb.toString()).toEqual("");
  });

  test("it should be able to concat strings", () => {
    const sb = new StringBuilder();

    sb.concat("okay").concat(" let's").concat(" go");

    expect(sb.toString()).toEqual("okay let's go");
  });

  test("it should be able to clear the string buffer", () => {
    const sb = new StringBuilder();

    sb.concat("okay").concat(" let's").concat(" go");
    expect(sb.toString()).not.toEqual("");

    sb.clear();
    expect(sb.toString()).toEqual("");
  });
});
