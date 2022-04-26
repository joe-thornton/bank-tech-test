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
        const creditOrDebitString =
          t.getAmount() > 0
            ? ` || ${t.getAmount().toFixed(2)} || || `
            : ` || || ${Math.abs(t.getAmount()).toFixed(2)} || `;
        const transactionText = `${dateString}${creditOrDebitString}${currentTotal.toFixed(
          2
        )}`;
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
