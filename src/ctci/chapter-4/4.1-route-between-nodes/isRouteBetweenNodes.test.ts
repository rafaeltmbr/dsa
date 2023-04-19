import { GraphNode } from "../../../data-structures";

import { isRouteBetweenNodes } from ".";

describe("isRouteBetweenNodes test suite", () => {
  test("it should return false for disconnected nodes", () => {
    /* Graph structure
            1
           / \
          2   3
               \
                4
               / \
              5   6
    */
    const node1 = new GraphNode(1);
    const node2 = new GraphNode(2);
    const node3 = new GraphNode(3);
    node1.neighbours.push(node2, node3);

    const node5 = new GraphNode(5);
    const node6 = new GraphNode(6);
    const node4 = new GraphNode(4, [node5, node6]);
    node3.neighbours.push(node4);

    expect(isRouteBetweenNodes(node2, node3)).toBe(false);
    expect(isRouteBetweenNodes(node3, node2)).toBe(false);
    expect(isRouteBetweenNodes(node2, node5)).toBe(false);
    expect(isRouteBetweenNodes(node5, node2)).toBe(false);
    expect(isRouteBetweenNodes(node5, node6)).toBe(false);
    expect(isRouteBetweenNodes(node6, node5)).toBe(false);
  });

  test("it should return false for nodes in disconnected graphs", () => {
    /* Graph structure
        |-> 1 -> 2 -> 3 -|
        |----------------|

        |-> 4 -> 5 -> 6 -|
        |----------------|
    */
    const node1 = new GraphNode(1);
    const node2 = new GraphNode(2);
    const node3 = new GraphNode(3);
    node1.neighbours.push(node2);
    node2.neighbours.push(node3);
    node3.neighbours.push(node1);

    const node5 = new GraphNode(5);
    const node4 = new GraphNode(4, [node5]);
    const node6 = new GraphNode(6, [node4]);
    node5.neighbours.push(node6);

    expect(isRouteBetweenNodes(node1, node4)).toBe(false);
    expect(isRouteBetweenNodes(node4, node1)).toBe(false);
    expect(isRouteBetweenNodes(node2, node5)).toBe(false);
    expect(isRouteBetweenNodes(node5, node2)).toBe(false);
    expect(isRouteBetweenNodes(node3, node6)).toBe(false);
    expect(isRouteBetweenNodes(node6, node3)).toBe(false);
  });

  test("it should return true for the same node", () => {
    const node = new GraphNode(Math.random());

    expect(isRouteBetweenNodes(node, node)).toBe(true);
  });

  test("it should return true for connected nodes", () => {
    /* Graph structure
            1
           / \
          2   3
               \
                4
               / \
              5   6
    */
    const node1 = new GraphNode(1);
    const node2 = new GraphNode(2);
    const node3 = new GraphNode(3);
    node1.neighbours.push(node2, node3);

    const node5 = new GraphNode(5);
    const node6 = new GraphNode(6);
    const node4 = new GraphNode(4, [node5, node6]);
    node3.neighbours.push(node4);

    expect(isRouteBetweenNodes(node1, node5)).toBe(true);
    expect(isRouteBetweenNodes(node5, node1)).toBe(true);
    expect(isRouteBetweenNodes(node1, node4)).toBe(true);
    expect(isRouteBetweenNodes(node4, node1)).toBe(true);
  });
});
