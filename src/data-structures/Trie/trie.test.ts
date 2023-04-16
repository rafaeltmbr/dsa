import { Trie } from ".";

describe("Trie test suite", () => {
  test("it should build a Trie from an starting array", () => {
    const trie1 = new Trie();
    expect(trie1.has("one")).toBe(false);
    expect(trie1.has("two")).toBe(false);
    expect(trie1.has("three")).toBe(false);

    const trie2 = new Trie(["one", "two", "three"]);
    expect(trie2.has("one")).toBe(true);
    expect(trie2.has("two")).toBe(true);
    expect(trie2.has("three")).toBe(true);
  });

  test("it should add words to the trie and check their existance (case sensitive)", () => {
    const trie = new Trie(["fine"]);

    expect(trie.has("fine")).toBe(true);
    expect(trie.has("Fine")).toBe(false);
    expect(trie.has("all")).toBe(false);
    expect(trie.has("alL")).toBe(false);
    expect(trie.has("right")).toBe(false);
    expect(trie.has("Right")).toBe(false);

    trie.add("all").add("right");
    expect(trie.has("fine")).toBe(true);
    expect(trie.has("Fine")).toBe(false);
    expect(trie.has("all")).toBe(true);
    expect(trie.has("alL")).toBe(false);
    expect(trie.has("right")).toBe(true);
    expect(trie.has("Right")).toBe(false);

    trie.add("Fine");
    expect(trie.has("fine")).toBe(true);
    expect(trie.has("Fine")).toBe(true);
  });

  test("it should ignore words that already exist in the trie", () => {
    const trie = new Trie();
    expect(trie.has("bomb")).toBe(false);
    expect(trie.has("fire")).toBe(false);
    expect(trie.has("Bomb")).toBe(false);

    trie.add("fire").add("bomb").add("fire").add("Bomb");
    expect(trie.has("bomb")).toBe(true);
    expect(trie.has("fire")).toBe(true);
    expect(trie.has("Bomb")).toBe(true);
  });

  test("it should remove only the wanted words from the trie (case sensitive)", () => {
    const trie = new Trie(["i", "love", "you", "babe"]);
    expect(trie.has("i")).toBe(true);
    expect(trie.has("love")).toBe(true);
    expect(trie.has("you")).toBe(true);
    expect(trie.has("babe")).toBe(true);

    trie.remove("i").remove("love");
    expect(trie.has("i")).toBe(false);
    expect(trie.has("love")).toBe(false);
    expect(trie.has("you")).toBe(true);
    expect(trie.has("babe")).toBe(true);

    trie.remove("babe").remove("i");
    expect(trie.has("i")).toBe(false);
    expect(trie.has("love")).toBe(false);
    expect(trie.has("you")).toBe(true);
    expect(trie.has("babe")).toBe(false);

    trie.remove("you");
    expect(trie.has("i")).toBe(false);
    expect(trie.has("love")).toBe(false);
    expect(trie.has("you")).toBe(false);
    expect(trie.has("babe")).toBe(false);

    trie.remove("ghost");
    expect(trie.has("i")).toBe(false);
    expect(trie.has("love")).toBe(false);
    expect(trie.has("you")).toBe(false);
    expect(trie.has("babe")).toBe(false);
    expect(trie.has("ghost")).toBe(false);
  });

  test("it should get a list of all words starting with some string", () => {
    const trie = new Trie([
      "data",
      "ar",
      "c",
      "ca",
      "car",
      " car",
      "card",
      "cart",
      "carts",
      "cartel",
      "carousel",
      "call",
      "basket",
    ]);

    expect(trie.getAllStartingWith("car").sort().join("-")).toEqual(
      "car-card-carousel-cart-cartel-carts"
    );

    expect(trie.getAllStartingWith("Car").sort().join("-")).toEqual("");
  });

  test("it should get a list of all the words in the trie", () => {
    const trie = new Trie(["a", "b", "church"]);

    expect(trie.has("a")).toBe(true);
    expect(trie.has("b")).toBe(true);
    expect(trie.has("church")).toBe(true);
    expect(trie.getAllStartingWith("").sort().join("-")).toEqual("a-b-church");

    trie.add("double");
    expect(trie.getAllStartingWith("").sort().join("-")).toEqual(
      "a-b-church-double"
    );
  });

  test("it should consider spaces", () => {
    const trie = new Trie(["foo", "bar"]);

    expect(trie.has(" foo")).toBe(false);
    expect(trie.has("f oo")).toBe(false);
    expect(trie.has("foo ")).toBe(false);
    expect(trie.has("foO")).toBe(false);
    expect(trie.has("foo")).toBe(true);

    trie.add(" foo");
    expect(trie.has(" foo")).toBe(true);
  });

  test("it should not add an empty string as a word", () => {
    const trie = new Trie();
    expect(trie.getAllStartingWith("").length).toEqual(0);

    trie.add("");
    expect(trie.getAllStartingWith("").length).toEqual(0);
  });

  test("it should not remove and empty string", () => {
    const trie = new Trie(["all", "right"]);
    expect(trie.getAllStartingWith("").sort().join("-")).toEqual("all-right");

    trie.remove("");
    expect(trie.getAllStartingWith("").sort().join("-")).toEqual("all-right");
  });
});
