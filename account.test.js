const Account = require("./account");

describe("account", () => {
  it("deposits money and displays the correct balance", () => {
    account = new Account();
    account.deposit(10);
    expect(account.balance()).toEqual(10);
  });
});
