const Transaction = require("./transaction");

describe("Transaction", () => {
  it("returns a positive amount", () => {
    transaction = new Transaction(10);
    expect(transaction.getAmount()).toEqual(10);
  });

  it("returns a negative amount", () => {
    transaction = new Transaction(-10);
    expect(transaction.getAmount()).toEqual(-10);
  });
});
