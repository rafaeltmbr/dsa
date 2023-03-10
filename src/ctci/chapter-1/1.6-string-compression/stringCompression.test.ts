import { compressString } from ".";

describe("stringCompression test suite", () => {
  test("it should support empty string", () => {
    expect(compressString("")).toBe("");
    expect(compressString("a")).toBe("a");
  });

  test("it should return the original string in case of no compression", () => {
    expect(compressString("a")).toBe("a");
    expect(compressString("bC")).toBe("bC");
    expect(compressString("Hpp")).toBe("Hpp");
    expect(compressString("xxyY")).toBe("xxyY");
    expect(compressString("aaa")).toBe("a3");
  });

  test("it should return the compression string", () => {
    expect(compressString("aaa")).toBe("a3");
    expect(compressString("zoooomm")).toBe("z1o4m2");
    expect(compressString("zoooomm")).toBe("z1o4m2");
    expect(compressString("Zeeeeeeeeeeeeeeeeeeebraaaaaa")).toBe("Z1e19b1r1a6");
  });

  test("it should be case sensitive", () => {
    expect(compressString("zoooOmm")).toBe("zoooOmm");
    expect(compressString("fooooooooo")).toBe("f1o9");
    expect(compressString("foooooOooO")).toBe("foooooOooO");
    expect(compressString("foooooOooo")).toBe("f1o5O1o3");
    expect(compressString("foooO")).toBe("foooO");
  });
});
