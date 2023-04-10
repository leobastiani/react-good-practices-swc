import { memoize } from "lodash";

export const myMemoized = memoize((num: number, sideEffect: () => void) => {
  sideEffect();
  return num + 1;
});

export const myFunction = () => "myReturn";
