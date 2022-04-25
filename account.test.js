const Account = require("./account");

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

  it("can accept a 1 decimal place deposit", () => {
    account.deposit(0.1);
    expect(account.getBalance()).toEqual(0.1);
  });

  it("can accept a 2 decimal place deposit", () => {
    account.deposit(0.11);
    expect(account.getBalance()).toEqual(0.11);
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
});
