import { TreeNode } from "../../data-structures";

export const preOnderTravesal = <T>(
  tree: TreeNode<T>,
  cb: (value: T) => void
): void => {
  cb(tree.value);
  tree.children.forEach((e) => preOnderTravesal(e, cb));
};

export const inOnderTravesal = <T>(
  tree: TreeNode<T>,
  cb: (value: T) => void
): void => {
  const [left, ...right] = tree.children;

  if (left) inOnderTravesal(left, cb);

  cb(tree.value);

  right.forEach((e) => inOnderTravesal(e, cb));
};

export const postOnderTravesal = <T>(
  tree: TreeNode<T>,
  cb: (value: T) => void
): void => {
  tree.children.forEach((e) => postOnderTravesal(e, cb));

  cb(tree.value);
};
