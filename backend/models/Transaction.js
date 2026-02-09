const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  // ✅ Link transaction to logged-in user
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  amount: {
    type: Number,
    required: true,
  },

  type: {
    type: String,
    enum: ["income", "expense"],
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transaction", transactionSchema);
