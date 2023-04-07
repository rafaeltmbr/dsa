import { Stack } from "../../../data-structures/Stack";

const balanceStacks = <T>(a: Stack<T>, b: Stack<T>): boolean => {
  const isReverse = a.isEmpty();

  if (isReverse) {
    const c = a;
    a = b;
    b = c;
  }

  let hasSwapped = false;

  while (!a.isEmpty()) {
    const aTop = a.pop() as T;
    const bTop = b.peek() as T;

    if (b.isEmpty() || (isReverse ? aTop <= bTop : aTop >= bTop)) {
      b.push(aTop);
      continue;
    }

    b.pop();
    b.push(aTop).push(bTop);
    hasSwapped = true;
  }

  return hasSwapped || !isReverse;
};

/**
 * Sort the stack with bubble sort using only an extra stack as a helper
 * @param stack stack that is sorted in place
 */

export const sortStack = <T>(stack: Stack<T>): void => {
  if (stack.isEmpty()) return;

  const temp = new Stack<T>();

  while (balanceStacks(stack, temp));
};
