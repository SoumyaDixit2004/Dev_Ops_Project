import { useEffect, useState } from "react";
import axios from "axios";

function Balance() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function fetchTransactions() {
      const res = await axios.get("http://localhost:5000/api/transactions");

      let total = 0;
      res.data.forEach((t) => {
        if (t.type === "income") total += t.amount;
        else total -= t.amount;
      });

      setBalance(total);
    }

    fetchTransactions();
  }, []);

  return <h2>Total Balance: ₹{balance}</h2>;
}

export default Balance;
