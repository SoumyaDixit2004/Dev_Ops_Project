import axios from "axios";

function TransactionList({ transactions, refreshData }) {
  const deleteTransaction = async (id) => {
    try {
      // ✅ Get token
      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:5000/api/transactions/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      alert("✅ Transaction Deleted!");
      refreshData();
    } catch (error) {
      alert("❌ Not Authorized. Please Login Again.");
      console.log(error.response.data);
    }
  };

  return (
    <div className="history">
      <h2>Transaction History</h2>

      {transactions.length === 0 ? (
        <p className="empty">No transactions yet...</p>
      ) : (
        <ul>
          {transactions.map((t) => (
            <li key={t._id} className={t.type}>
              <span>{t.title}</span>

              <span className="amount">
                {t.type === "income" ? "+" : "-"}₹{t.amount}
              </span>

              <button onClick={() => deleteTransaction(t._id)}>❌</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;
