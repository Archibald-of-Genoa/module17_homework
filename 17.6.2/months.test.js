import { getMonth } from "./months";

describe("getMonth working", () => {
  it("Возвращается верное название месяца", () => {
    expect(getMonth(2)).toBe("февраль");
    expect(getMonth(4)).toBe("апрель");
    expect(getMonth(6)).toBe("июнь");
  });

  it("Появляется сообщение об ошибке, если название месяца неправильное", () => {
    expect(getMonth(25)).toBe("некорректный номер месяца");
  });

  //Corner Cases
  it("Возвращает январь для номера 1 и декабрь для номера 12", () => {
    expect(getMonth(1)).toBe("январь");
    expect(getMonth(12)).toBe("декабрь");
  });
});
