import { LinkedList } from ".";

describe("LinkedList test suite", () => {
  test("it should able to get he right head", () => {
    const list1 = new LinkedList<number>();
    const random1 = Math.random();

    list1.addToHead(random1);
    expect(list1.head?.data).toEqual(random1);

    const list2 = new LinkedList<number>();
    const random2 = Math.random();
    list2.addToTail(random2);
    expect(list2.head?.data).toEqual(random2);
  });

  test("it should be able to append to head", () => {
    const list = new LinkedList<number>();

    const random1 = Math.random();
    list.addToHead(random1);
    expect(list.head?.data).toEqual(random1);

    const random2 = Math.random();
    list.addToHead(random2);
    expect(list.head?.data).toEqual(random2);

    const random3 = Math.random();
    list.addToHead(random3);
    expect(list.head?.data).toEqual(random3);
  });

  test("it should be able to append to tail", () => {
    const list = new LinkedList<string>();

    list.addToTail("fine");
    expect(list.head?.data).toEqual("fine");

    list.addToTail("right");
    expect(list.head?.next?.data).toEqual("right");
  });

  test("it should be able to remove the head by data", () => {
    const list = new LinkedList<string>();

    list
      .addToTail("a")
      .addToTail("b")
      .addToTail("c")
      .addToTail("d")
      .addToTail("e");

    expect(list.head?.data).toEqual("a");
    list.remove("a");
    expect(list.head?.data).toEqual("b");

    let length = 0;
    for (let n = list.head; n; n = n.next) {
      if (n.data === "a") throw new Error("element should be removed");
      length += 1;
    }
    expect(length).toEqual(4);
  });

  test("it should be able to remove any node by data", () => {
    const list = new LinkedList<string>();

    list
      .addToTail("a")
      .addToTail("b")
      .addToTail("c")
      .addToTail("d")
      .addToTail("e");

    expect(list.head?.data).toEqual("a");
    list.remove("d");
    expect(list.head?.data).toEqual("a");

    let length = 0;
    for (let n = list.head; n; n = n.next) {
      if (n.data === "d") throw new Error("element should be removed");
      length += 1;
    }
    expect(length).toEqual(4);
  });

  test("it should be able to remove the tail by data", () => {
    const list = new LinkedList<string>();

    list
      .addToTail("a")
      .addToTail("b")
      .addToTail("c")
      .addToTail("d")
      .addToTail("e");

    expect(list.head?.data).toEqual("a");
    list.remove("e");
    expect(list.head?.data).toEqual("a");

    let length = 0;
    for (let n = list.head; n; n = n.next) {
      if (n.data === "e") throw new Error("element should be removed");
      length += 1;
    }
    expect(length).toEqual(4);
  });

  test("it should ignore a non existing element remotion", () => {
    const list = new LinkedList<string>();

    list
      .addToTail("a")
      .addToTail("b")
      .addToTail("c")
      .addToTail("d")
      .addToTail("e");

    expect(list.head?.data).toEqual("a");
    list.remove("g");
    expect(list.head?.data).toEqual("a");

    let length = 0;
    for (let n = list.head; n; n = n.next) {
      if (n.data === "g") throw new Error("element should be removed");
      length += 1;
    }
    expect(length).toEqual(5);
  });

  test("it should be able to remove nothing from an empty list", () => {
    const list = new LinkedList<string>();

    expect(list.head).toEqual(null);
    list.remove("a");
    expect(list.head).toEqual(null);

    let length = 0;
    for (let n = list.head; n; n = n.next) {
      if (n.data === "a") throw new Error("element should be removed");
      length += 1;
    }
    expect(length).toEqual(0);
  });
});
