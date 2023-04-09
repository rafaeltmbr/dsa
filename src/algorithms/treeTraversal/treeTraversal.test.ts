import { TreeNode } from "../../data-structures";

import { inOnderTravesal, postOnderTravesal, preOnderTravesal } from ".";

/**
 * Make the following tree structure:
 *           4
 *         /   \
 *        2     6
 *       / \   / \
 *      1   3 5   7
 */

const makeTree = (): TreeNode<number> =>
  new TreeNode(4, [
    new TreeNode(2, [new TreeNode(1), new TreeNode(3)]),
    new TreeNode(6, [new TreeNode(5), new TreeNode(7)]),
  ]);

describe("treeTraversal test suite", () => {
  test("it should support pre order traversal", () => {
    const tree = makeTree();

    const values: number[] = [];
    preOnderTravesal(tree, (e) => values.push(e));

    expect(values.join(" ")).toEqual("4 2 1 3 6 5 7");
  });

  test("it should support in order traversal", () => {
    const tree = makeTree();

    const values: number[] = [];
    inOnderTravesal(tree, (e) => values.push(e));

    expect(values.join(" ")).toEqual("1 2 3 4 5 6 7");
  });

  test("it should support post order traversal", () => {
    const tree = makeTree();

    const values: number[] = [];
    postOnderTravesal(tree, (e) => values.push(e));

    expect(values.join(" ")).toEqual("1 3 2 5 7 6 4");
  });
});
