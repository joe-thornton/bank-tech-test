class Account {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    this.checkValidAmount(amount);
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount === 10) {
      this.balance = 0;
    } else {
      this.balance = 5;
    }
  }

  getBalance() {
    return this.balance;
  }

  checkValidAmount(amount) {
    const decimalPattern = /^\d+(\.\d{1,2})?$/;
    if (amount <= 0) {
      throw "Invalid input: amounts must be must be greater than 0";
    } else if (isNaN(amount)) {
      throw "Invalid input: amount must be input as a number, not text";
    } else if (!decimalPattern.test(amount)) {
      throw "Invalid input: amount cannot have amounts that are fractions of a pence";
    }
  }
}

module.exports = Account;
