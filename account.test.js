const Account = require("./account");

describe("account", () => {
  it("creates a new account with a balance of 0", () => {
    account = new Account();
    expect(account.get_balance()).toEqual(0);
  });

  it("deposits money and displays the balance", () => {
    account = new Account();
    account.deposit(10);
    expect(account.balance()).toEqual(10);
  });
});
