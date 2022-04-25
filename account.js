class Account {
  constructor() {
    this.balance = 0;
  }
  deposit(amount) {
    this.balance = amount;
  }

  get_balance() {
    return this.balance;
  }
}

module.exports = Account;
