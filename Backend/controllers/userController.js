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
    try{
        const { email, password } = req.body;
        // check the user exists or not
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User does not exist" });
        }
        // check the password is correct or not
        const isMatch = await bcrypt.compare(password, user.password);  
        if (!isMatch) {
            const token = createToken(user._id);
            res.json({ success: true, token });
        }
        else {
            res.json({ success: false, message: "Invalid credentials" });
        }
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
  }
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
    res.json({ success: false, message: error.message });
  }
};


// Route for Admin Login
const adminLogin = async (req, res) => {
   try{
     const {email, password} = req.body

     if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
        const token = jwt.sign(email+password,process.env.JWT_SECRET)
        res.json({sucess:true,token})
     }else {
        res.json({sucess:false,message:"Invalid credentials"})
     }

   } catch (error){
       console.error(error);
       res.json({ success: false, message: error.message });
   }
};

export { loginUser, registerUser, adminLogin };
