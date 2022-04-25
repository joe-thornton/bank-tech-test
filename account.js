class Account {
  constructor() {
    this.transactions = [];
  }

  deposit(amount) {
    this.checkAmountIsValidNumber(amount);
    this.transactions.push(new Transaction(amount));
  }

  withdraw(amount) {
    this.transactions.push(new Transaction(-amount));
  }

  getBalance() {
    return this.transactions
      .map((t) => t.getAmount())
      .reduce((acc, prev) => acc + prev, 0);
  }

  checkAmountIsValidNumber(amount) {
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

class Transaction {
  constructor(amount) {
    this.amount = amount;
  }

  getAmount() {
    return this.amount;
  }
}

module.exports = Account;
