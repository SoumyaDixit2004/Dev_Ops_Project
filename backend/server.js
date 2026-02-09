const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/transactions", require("./routes/transactionRoutes"));

app.get("/", (req, res) => {
  res.send("Expense Tracker Backend Running...");
});

app.listen(process.env.PORT, () => {
  console.log(`✅ Server running on port ${process.env.PORT}`);
});

app.use("/api/auth", require("./routes/authRoutes"));
