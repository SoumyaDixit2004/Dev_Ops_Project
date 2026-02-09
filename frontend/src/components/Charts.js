import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Legend,
} from "recharts";

function Charts({ transactions }) {
  let income = 0;
  let expense = 0;

  transactions.forEach((t) => {
    if (t.type === "income") income += t.amount;
    else expense += t.amount;
  });

  const pieData = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
  ];

  const barData = [
    { category: "Income", amount: income },
    { category: "Expense", amount: expense },
  ];

  return (
    <div className="charts">
      <h2>📊 Analytics Dashboard</h2>

      {/* Pie Chart */}
      <PieChart width={250} height={250}>
        <Pie
          data={pieData}
          dataKey="value"
          outerRadius={90}
          label
        >
          <Cell fill="#16a34a" />
          <Cell fill="#dc2626" />
        </Pie>
        <Tooltip />
      </PieChart>

      {/* Bar Chart */}
      <BarChart width={300} height={250} data={barData}>
        <XAxis dataKey="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#2563eb" />
      </BarChart>
    </div>
  );
}

export default Charts;
