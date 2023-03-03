export const getRandomValues = (size: number): number[] => {
  const randomValues: number[] = [];

  for (let i = 0; i < size; i += 1) randomValues.push(Math.random());

  return randomValues;
};
