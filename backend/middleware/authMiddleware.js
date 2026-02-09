const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  const token = req.headers.authorization;

  // ✅ Token Missing
  if (!token) {
    return res.status(401).json({
      message: "Not Authorized, Token Missing",
    });
  }

  try {
    // ✅ Verify Token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Attach User ID
    req.userId = decoded.id;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
};

module.exports = protect;
