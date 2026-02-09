import { useState } from "react";
import axios from "axios";

function AddTransaction({ refreshData }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !amount) {
      alert("Fill all fields!");
      return;
    }

    try {
      // ✅ Get token
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/transactions/add",
        {
          title,
          amount: Number(amount),
          type,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      alert("✅ Transaction Added!");

      setTitle("");
      setAmount("");
      setType("expense");

      refreshData();
    } catch (error) {
      alert("❌ Please Login First!");
      console.log(error.response.data);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add Transaction</h2>

      <input
        type="text"
        placeholder="Enter title (Salary, Shopping...)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <button type="submit">➕ Add Transaction</button>
    </form>
  );
}

export default AddTransaction;
