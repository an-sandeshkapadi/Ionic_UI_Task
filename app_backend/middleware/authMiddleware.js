
const jwt = require('jsonwebtoken');

const SECRET_KEY = "punenexus123"; // Secret Key

module.exports = (req, res, next) => {
  const authHeader = req.header('Authorization');

  if (!authHeader) {
    console.log("No Authorization Header Found!");
    return res.status(403).json({ message: 'Access denied. No token provided.' });
  }

  // Extract token from "Bearer <TOKEN>"
  const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;
  console.log(token); // 🔥 Log token for debugging
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log("Decoded Token Data:", decoded); // 🔥 Log token data for debugging

    req.user = decoded; // Attach user data to request
    next();
  } catch (error) {
    console.log("Token Verification Failed:", error.message);
    res.status(401).json({ message: 'Invalid token' });
  }
};

