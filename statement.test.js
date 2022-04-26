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
    const getAmount = jest.fn().mockReturnValue(1000);
    const getDate = jest.fn().mockReturnValue(new Date(2021, 0, 10, 0, 0, 0));
    let transactions = [{ getAmount, getDate }];
    statement = new Statement(transactions);
    expect(statement.getText()).toEqual(
      "date || credit || debit || balance\n10/01/2021 || 1000.00 || || 1000.00"
    );
  });

  it("statement returns 2 transactions", () => {
    const getDate = jest
      .fn()
      .mockImplementation(() => new Date(2021, 0, 10, 0, 0, 0));
    let transactions = [
      {
        getAmount: jest.fn().mockReturnValue(1000),
        getDate: jest.fn().mockReturnValue(new Date(2021, 0, 10, 0, 0, 0)),
      },
      {
        getAmount: jest.fn().mockReturnValue(2000),
        getDate: jest.fn().mockReturnValue(new Date(2021, 0, 13, 0, 0, 0)),
      },
    ];
    statement = new Statement(transactions);
    expect(statement.getText()).toEqual(
      "date || credit || debit || balance\n13/01/2021 || 2000.00 || || 3000.00\n10/01/2021 || 1000.00 || || 1000.00"
    );
  });

  // it("statement returns 3 transactions where one is a", () => {
  //   const getDate = jest
  //     .fn()
  //     .mockImplementation(() => new Date(2021, 0, 10, 0, 0, 0));
  //   let transactions = [
  //     {
  //       getAmount: jest.fn().mockReturnValue(1000),
  //       getDate: jest.fn().mockReturnValue(new Date(2021, 0, 10, 0, 0, 0)),
  //     },
  //     {
  //       getAmount: jest.fn().mockReturnValue(2000),
  //       getDate: jest.fn().mockReturnValue(new Date(2021, 0, 13, 0, 0, 0)),
  //     },
  //     {
  //       getAmount: jest.fn().mockReturnValue(-500),
  //       getDate: jest.fn().mockReturnValue(new Date(2021, 0, 14, 0, 0, 0)),
  //     },
  //   ];
  //   statement = new Statement(transactions);
  //   expect(statement.getText()).toEqual(
  //     "date || credit || debit || balance\n14/01/2021 || || 500.00 || 2500.00\n13/01/2021 || 2000.00 || || 3000.00\n10/01/2021 || 1000.00 || || 1000.00"
  //   );
  // });
});
