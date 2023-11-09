import {multiply} from "./sum.js";

describe("test multiply", () => {
  it("multyply 1 * 0 to equal 1", () => {
    const result = multiply(1, 0);
    expect(result).toBe(0);
  }),
    it("multyply 1 * 1 to equal 1", () => {
      const result = multiply(1, 1);
      expect(result).toBe(1);
    });
});

describe("test multiply 2", () => {
  it("multyply 1 * 0 to equal 1", () => {
    const result = multiply(1, 0);
    expect(result).toBe(0);
  }),
    it("multyply 1 * 1 to equal 1", () => {
      const result = multiply(1, 1);
      expect(result).toBe(1);
    });
});
