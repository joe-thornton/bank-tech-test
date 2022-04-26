class Statement {
  constructor(transactions) {
    this.transactions = transactions;
    this.statement = [];
  }

  getText() {
    if (this.transactions.length === 0) {
      return "No transactions - your balance is zero";
    } else {
      let transactionText = "date || credit || debit || balance\n";
      let currentTotal = 0;
      const transactionTexts = [];
      this.transactions.forEach((t) => {
        currentTotal = currentTotal + t.getAmount();
        const dateString = this.getDateText(t.getDate());
        const transactionText = `${dateString} || ${t
          .getAmount()
          .toFixed(2)} || || ${currentTotal.toFixed(2)}`;
        transactionTexts.push(transactionText);
      });
      const transactionsTextReversed = transactionTexts.reverse().join("\n");
      return `${transactionText}${transactionsTextReversed}`;
    }
  }

  getDateText(date) {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return date.toLocaleDateString("en-GB", options);
  }
}

module.exports = Statement;
