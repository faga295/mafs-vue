import { round, closestMultiple, range } from "../src/utils/range";
import { computeAnchor } from "../src/utils/math";

describe("range", () => {
  it("round", () => {
    expect(round(1.03041234, 5)).toBe(1.03041);
    expect(round(-1.0324232, 5)).toBe(-1.03242);
  });
  it("closestMultiple", () => {
    expect(closestMultiple(-5, 3.14)).toBe(-3.14);
    expect(closestMultiple(5, 3.14)).toBe(3.14);
  });
  it("range", () => {
    expect(range(-5, 5, 3.14)).toStrictEqual([-3.14, 0, 3.14]);
  });
});

describe("computeAnchor", () => {
  it("computes bottom-left anchor", () => {
    expect(computeAnchor("bl", 2, 3, 4, 5)).toStrictEqual([2, 8]);
  });

  it("computes center anchor", () => {
    expect(computeAnchor("cc", 6, -1, 2, 2)).toStrictEqual([5, 0]);
  });
});
