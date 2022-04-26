const Account = require("./account");
const mockDate = require("jest-date-mock");

describe("account", () => {
  beforeEach((done) => {
    account = new Account();
    done();
  });

  it("creates a new account with a balance of 0", () => {
    expect(account.getBalance()).toEqual(0);
  });

  it("deposits money and displays the balance", () => {
    account.deposit(10);
    expect(account.getBalance()).toEqual(10);
  });

  it("deposits a different amount and displays the balance", () => {
    account.deposit(20);
    expect(account.getBalance()).toEqual(20);
  });

  it("can take 2 positive integer deposits", () => {
    account.deposit(10);
    account.deposit(20);
    expect(account.getBalance()).toEqual(30);
  });

  it("deposit does not accept a negative amount", () => {
    expect(() => {
      account.deposit(-1);
    }).toThrow("Invalid input: amounts must be must be greater than 0");
  });

  it("deposit does not accept a negative amount", () => {
    expect(() => {
      account.deposit("ten");
    }).toThrow("Invalid input: amount must be input as a number, not text");
  });

  it("deposit does not an amount with more than 2 decimal places", () => {
    expect(() => {
      account.deposit(1.133);
    }).toThrow(
      "Invalid input: amount cannot have amounts that are fractions of a pence"
    );
  });

  it("can make a deposit and then withdraw that amount", () => {
    account.deposit(10);
    account.withdraw(10);
    expect(account.getBalance()).toEqual(0);
  });

  it("can deposit 10 and then withdraw 5", () => {
    account.deposit(10);
    account.withdraw(5);
    expect(account.getBalance()).toEqual(5);
  });

  it("can deposit 10 and then withdraw 3", () => {
    account.deposit(10);
    account.withdraw(3);
    expect(account.getBalance()).toEqual(7);
  });

  it("cannot withdraw more than the account balance", () => {
    account.deposit(10);
    expect(() => {
      account.withdraw(11);
    }).toThrow("Insufficient funds: you only have 10 in your account");
  });

  it("withdraw does not accept a negative amount", () => {
    account.deposit(10);
    expect(() => {
      account.withdraw(-1);
    }).toThrow("Invalid input: amounts must be must be greater than 0");
  });

  it("withdraw does not accept a negative amount", () => {
    account.deposit(10);
    expect(() => {
      account.withdraw("ten");
    }).toThrow("Invalid input: amount must be input as a number, not text");
  });

  it("withdraw does not an amount with more than 2 decimal places", () => {
    account.deposit(10);
    expect(() => {
      account.withdraw(1.133);
    }).toThrow(
      "Invalid input: amount cannot have amounts that are fractions of a pence"
    );
  });

  // it("statement returns message saying no transactions", () => {
  //   console.log = jest.fn();
  //   account.printStatement();
  //   expect(console.log).toHaveBeenCalledWith(
  //     "No transactions - your balance is zero"
  //   );
  // });

  // it("statement returns single transaction for deposit", () => {
  //   transactionDate = new Date(2021, 1, 10, 0, 0, 0);
  //   account.deposit(1000, transactionDate);
  //   console.log = jest.fn();
  //   account.printStatement();
  //   expect(console.log).toHaveBeenCalledWith(
  //     "date || credit || debit || balance\n14/01/2021 || 1000.00 || || 1000.00"
  //   );
  // });
});
