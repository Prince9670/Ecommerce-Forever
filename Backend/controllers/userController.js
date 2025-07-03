import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  // Function to create a JWT token
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Route for user login
const loginUser = async (req, res) => {

};

// Route for user registration
const registerUser = async (req, res) => {
    
  try {
    const { name, email, password } = req.body;
    // check the user already exists or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ sucess: false, message: "User already exists" });
    }
    // validate the email and strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });

    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    // Hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);
    res.json({success: true, token});
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Server error" });
  }
};

// Route for Admin Login
const adminLogin = async (req, res) => {
   
};

export { loginUser, registerUser, adminLogin };
