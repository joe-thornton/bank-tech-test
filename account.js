const Transaction = require("./transaction");

class Account {
  constructor() {
    this.transactions = [];
  }

  deposit(amount) {
    this.#checkAmountIsValidNumber(amount);
    this.transactions.push(new Transaction(amount));
  }

  withdraw(amount) {
    this.#checkAmountIsValidNumber(amount);
    this.#checkSufficientBalance(amount);
    this.transactions.push(new Transaction(-amount));
  }

  #checkAmountIsValidNumber(amount) {
    const decimalPattern = /^\d+(\.\d{1,2})?$/;
    if (amount <= 0) {
      throw "Invalid input: amounts must be must be greater than 0";
    } else if (isNaN(amount)) {
      throw "Invalid input: amount must be input as a number, not text";
    } else if (!decimalPattern.test(amount)) {
      throw "Invalid input: amount cannot have amounts that are fractions of a pence";
    }
    return;
  }

  printStatement() {
    if (this.transactions.length === 0) {
      console.log("No transactions - your balance is zero");
    } else {
      console.log(
        "date || credit || debit || balance\n14/01/2021 || 1000.00 || || 1000.00"
      );
    }
  }

  getBalance() {
    return this.transactions
      .map((t) => t.getAmount())
      .reduce((acc, prev) => acc + prev, 0);
  }

  #checkSufficientBalance(amount) {
    if (amount > this.getBalance()) {
      throw `Insufficient funds: you only have ${this.getBalance()} in your account`;
    }
  }
}

module.exports = Account;
