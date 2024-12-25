import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    // Get token from headers
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "Not Authorized. Login again." });
    }

    const token = authHeader.split(" ")[1]; // Extract the token after "Bearer"

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Validate admin
    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({ success: false, message: "Forbidden. Not an admin." });
    }

    // Proceed to next middleware
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export default adminAuth;
