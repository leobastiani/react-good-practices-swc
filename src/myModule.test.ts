import * as myModule from "./myModule";
import { myFunction, myMemoized } from "./myModule";

const sideEffect = vi.fn();

vi.mock("lodash");

for (const i of [1, 2, 3]) {
  it(`test memoize ${i}`, () => {
    expect(myMemoized(1, sideEffect)).toBe(2);
    expect(sideEffect).toHaveBeenCalledTimes(1);
    expect(myMemoized(2, sideEffect)).toBe(3);
    expect(sideEffect).toHaveBeenCalledTimes(2);

    // repeat
    expect(myMemoized(2, sideEffect)).toBe(3);
    expect(sideEffect).toHaveBeenCalledTimes(2);
  });
}

describe("myFunction", () => {
  it("mocked", () => {
    vi.spyOn(myModule, "myFunction").mockReturnValue("not me");

    expect(myFunction()).toBe("not me");
  });

  it("not mocked", () => {
    expect(myFunction()).toBe("myReturn");
  });
});
