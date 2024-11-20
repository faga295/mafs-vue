import { round, closestMultiple, range } from "../src/utils/range";

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
