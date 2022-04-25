class Account {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    this.checkValidAmount(amount);
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }

  checkValidAmount(amount) {
    if (amount <= 0) {
      throw "Invalid input: amounts must be must be greater than 0";
    } else if (isNaN(amount)) {
      throw "Invalid input: amount must be input as a number, not text";
    }
  }
}

module.exports = Account;
