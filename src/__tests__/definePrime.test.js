import { definePrime } from "../definePrime";

xdescribe("tests for definePrime function", () => {
  it("should operate correctly with simple number", () => {
    expect(definePrime(17)).toBe("Число 17 - простое число");
  }),
    it("should operate correctly with complex number", () => {
      expect(definePrime(18)).toBe("Число 18 - составное число");
    }),
    it("should operate correctly with invalid number", () => {
      expect(definePrime(1001)).toBe("Данные неверны");
    });
});

xdescribe("tests for definePrime function", () => {
  it("should operate correctly with simple, complex and invalid number", () => {
    const simple = 17;
    const complex = 18;
    expect(definePrime(17)).toBe("Число 17 - простое число");
    expect(definePrime(18)).toBe("Число 18 - составное число");
    expect(definePrime(1001)).toBe("Данные неверны");
  });
});
