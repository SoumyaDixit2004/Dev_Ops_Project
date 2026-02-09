import { useEffect, useState } from "react";
import axios from "axios";

import SummaryCards from "../components/SummaryCards";
import Charts from "../components/Charts";
import AddTransaction from "../components/AddTransaction";
import TransactionList from "../components/TransactionList";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  // ✅ Fetch only logged-in user's transactions
  const fetchTransactions = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/transactions",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setTransactions(res.data);
    } catch (error) {
      alert("Not Authorized. Please Login Again.");
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div>
      <SummaryCards transactions={transactions} />

      <AddTransaction refreshData={fetchTransactions} />

      <Charts transactions={transactions} />

      <TransactionList
        transactions={transactions}
        refreshData={fetchTransactions}
      />
    </div>
  );
}

export default Dashboard;
