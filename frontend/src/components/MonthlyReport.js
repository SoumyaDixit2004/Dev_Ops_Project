function MonthlyReport({ transactions }) {
  const monthlyData = {};

  transactions.forEach((t) => {
    const date = new Date(t.date);
    const month = date.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });

    if (!monthlyData[month]) monthlyData[month] = 0;

    if (t.type === "expense") {
      monthlyData[month] += t.amount;
    }
  });

  return (
    <div className="monthly-report">
      <h2>📅 Monthly Expense Report</h2>

      <ul>
        {Object.keys(monthlyData).map((month) => (
          <li key={month}>
            <strong>{month}:</strong> ₹{monthlyData[month]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MonthlyReport;
