import { toCentAmount } from "../../src/util";

describe("PayGate Util Tests", () => {
  test("toCentAmount()", async () => {
    expect(toCentAmount(100)).toEqual("10000");
  });
});
