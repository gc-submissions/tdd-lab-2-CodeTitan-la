
const moneyFunc = require("../src/js/money-functions.js")

describe("formatCurrency", () => {
  test("given amount 0 get back 0.00", () => {
    expect(moneyFunc.formatCurrency(2)).toEqual("$2.00")
  })
  test("given amount 1 get back $1.00", () => {
    expect(moneyFunc.formatCurrency(1)).toEqual("$1.00")
  })
  test("given amount 1.5 get back $1.50", () => {
    expect(moneyFunc.formatCurrency(1.5)).toEqual("$1.50")
  })
  test("given amount 0.01 get back $1.50", () => {
    expect(moneyFunc.formatCurrency(0.01)).toEqual("$0.01")
  })

  test("given amount 527.6789 get back 527.68", () => {
    expect(moneyFunc.formatCurrency(527.6789)).toEqual("$527.68")
  })
  test("given amount -1.00 get back -1.00", () => {
    expect(moneyFunc.formatCurrency(-1)).toEqual("-$1.00")
  })
});

describe("getCoins", () => {
  test.todo("add getCoins tests here");
});