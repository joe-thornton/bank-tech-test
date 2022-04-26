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
        const transactionText = `${dateString}${this.getCreditOrDebitString(
          t.getAmount()
        )}${currentTotal.toFixed(2)}`;
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

  getCreditOrDebitString(transactionAmount) {
    if (transactionAmount > 0) {
      return ` || ${transactionAmount.toFixed(2)} || || `;
    } else {
      return ` || || ${Math.abs(transactionAmount).toFixed(2)} || `;
    }
  }
}

module.exports = Statement;
