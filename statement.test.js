const Statement = require("./statement");
const Account = require("./account");
jest.mock("./account");

describe("statement", () => {
  it("statement returns message saying no transactions", () => {
    let transactions = [];
    statement = new Statement(transactions);
    expect(statement.getText()).toEqual(
      "No transactions - your balance is zero"
    );
  });

  it("statement returns single transaction for deposit", () => {
    const getAmount = jest.fn().mockImplementation(() => 1000);
    const getDate = jest
      .fn()
      .mockImplementation(() => new Date(2021, 1, 10, 0, 0, 0));
    let transactions = [{ getAmount }];
    statement = new Statement(transactions);
    expect(statement.getText()).toEqual(
      "date || credit || debit || balance\n10/01/2021 || 1000.00 || || 1000.00"
    );
  });
});
