class Account {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw "Invalid input: amounts must be must be greater than 0";
    } else {
      this.balance += amount;
    }
  }

  get_balance() {
    return this.balance;
  }
}

module.exports = Account;
