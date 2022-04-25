const Account = require("./account");

describe("account", () => {
  beforeEach((done) => {
    account = new Account();
    done();
  });

  it("creates a new account with a balance of 0", () => {
    expect(account.get_balance()).toEqual(0);
  });

  it("deposits money and displays the balance", () => {
    account.deposit(10);
    expect(account.get_balance()).toEqual(10);
  });

  it("deposits a different amount and displays the balance", () => {
    account.deposit(20);
    expect(account.get_balance()).toEqual(20);
  });

  it("can take 2 positive integer deposits", () => {
    account.deposit(10);
    account.deposit(20);
    expect(account.get_balance()).toEqual(30);
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
});
