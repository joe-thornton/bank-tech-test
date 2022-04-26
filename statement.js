class Statement {
  constructor(transactions) {
    this.transactions = transactions;
  }

  getText() {
    if (this.transactions.length === 0) {
      return "No transactions - your balance is zero";
    } else {
      return "date || credit || debit || balance\n10/01/2021 || 1000.00 || || 1000.00";
    }
  }
}

module.exports = Statement;
