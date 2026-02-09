const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();


// ============================
// ✅ REGISTER API
// ============================
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Check all fields
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2. Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 3. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User Registered Successfully",
      user,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// ============================
// ✅ LOGIN API
// ============================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check all fields
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2. Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // 3. Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // 4. Generate JWT Token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "SECRET_KEY",
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login Successful",
      token,
      user,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
