import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login"; // already exists
import Register from "./pages/Register";

import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const res = await axios.get("http://localhost:5000/api/transactions");
    setTransactions(res.data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/dashboard"
            element={
              <Dashboard
                transactions={transactions}
                refreshData={fetchTransactions}
              />
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
