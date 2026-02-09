function SummaryCards({ transactions }) {
  let income = 0;
  let expense = 0;

  transactions.forEach((t) => {
    if (t.type === "income") income += t.amount;
    else expense += t.amount;
  });

  const balance = income - expense;

  return (
    <div className="summary">
      <div className="card balance">
        <h3>Total Balance</h3>
        <p>₹{balance}</p>
      </div>

      <div className="card income">
        <h3>Income</h3>
        <p>₹{income}</p>
      </div>

      <div className="card expense">
        <h3>Expense</h3>
        <p>₹{expense}</p>
      </div>
    </div>
  );
}

export default SummaryCards;
