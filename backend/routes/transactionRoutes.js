const express = require("express");
const Transaction = require("../models/Transaction");
const protect = require("../middleware/authMiddleware");

const router = express.Router();


// ===============================
// ✅ Add Transaction (User Specific)
// ===============================
router.post("/add", protect, async (req, res) => {
  try {
    const { title, amount, type } = req.body;

    const newTransaction = new Transaction({
      userId: req.userId, // ✅ logged-in user
      title,
      amount,
      type,
    });

    await newTransaction.save();

    res.status(201).json({
      message: "Transaction Added Successfully",
      transaction: newTransaction,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// ===============================
// ✅ Get Transactions (Only This User)
// ===============================
router.get("/", protect, async (req, res) => {
  try {
    const transactions = await Transaction.find({
      userId: req.userId, // ✅ filter by user
    }).sort({ date: -1 });

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// ===============================
// ✅ Delete Transaction (Only User Can Delete)
// ===============================
router.delete("/:id", protect, async (req, res) => {
  try {
    const deletedTransaction = await Transaction.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId, // ✅ ensure owner deletes
    });

    res.status(200).json({
      message: "Transaction Deleted Successfully",
      deletedTransaction,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
