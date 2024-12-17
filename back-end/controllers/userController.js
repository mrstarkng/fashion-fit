import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";


// Helper function to create a JWT token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "3d", // Token expires in 3 days
  });
};

// Route for login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }

    // Compare provided password with hashed password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.json({ success: false, message: "Incorrect password" });
    }

    // Create token
    const token = createToken(user._id);

    res.json({ success: true, token, user: { name: user.name, email: user.email } });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// Route for register user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    // Validate email
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid email" });
    }

    // Validate password strength
    if (password.length < 8) {
      return res.json({ success: false, message: "Please enter a strong password (min 8 characters)" });
    }

    // Hash user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    // Create token
    const token = createToken(user._id);

    res.json({ success: true, token, user: { name: user.name, email: user.email } });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// Route for admin login
const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if admin exists
    const admin = await userModel.findOne({ email, isAdmin: true });
    if (!admin) {
      return res.json({ success: false, message: "Admin account does not exist" });
    }

    // Compare provided password with hashed password
    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
      return res.json({ success: false, message: "Incorrect password" });
    }

    // Create token
    const token = createToken(admin._id);

    res.json({ success: true, token, admin: { name: admin.name, email: admin.email } });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

export { loginUser, registerUser, adminLogin };
