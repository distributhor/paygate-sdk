/* eslint-disable no-prototype-builtins */
import { removeAllNonValuedProperties, toCentAmount, splitCamelCaseString } from "../../src/util";

describe("PayGate Util Tests", () => {
  test("removeAllNonValuedProperties()", async () => {
    const obj = {
      A: "A",
      B: null,
      C: undefined,
      D: "",
      E: 4,
      F: 0,
    };

    removeAllNonValuedProperties(obj);

    expect(obj.A).toEqual("A");
    expect(obj.hasOwnProperty("B")).toBeFalsy();
    expect(obj.hasOwnProperty("C")).toBeFalsy();
    expect(obj.hasOwnProperty("D")).toBeFalsy();
    expect(obj.E).toEqual(4);
    expect(obj.F).toEqual(0);
  });

  test("toCentAmount()", async () => {
    expect(toCentAmount(100)).toEqual("10000");
    expect(toCentAmount(100.0)).toEqual("10000");
    expect(toCentAmount("100")).toEqual("10000");
    expect(toCentAmount("100.0")).toEqual("10000");
    expect(toCentAmount("100.00")).toEqual("10000");
    expect(toCentAmount(123.45)).toEqual("12345");
    expect(toCentAmount(12345)).toEqual("1234500");
    expect(toCentAmount("12345")).toEqual("1234500");
    expect(toCentAmount("123.45")).toEqual("12345");
  });

  test("splitCamelCaseString()", async () => {
    expect(splitCamelCaseString("splitCamelCase")).toEqual("split Camel Case");
    expect(splitCamelCaseString("SplitCamelCase")).toEqual("Split Camel Case");
    expect(splitCamelCaseString("SplitCamelCaseID")).toEqual("Split Camel Case ID");
    expect(splitCamelCaseString("splitCamelCaseIDNumber")).toEqual("split Camel Case IDNumber");
  });
});
