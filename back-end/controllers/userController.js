import validator from "validator";
import userModel from "../models/userModel.js"
//route for login user

const loginUser = async (req, res) => {
    const { email, password } = req.body
}


//route for register user
const registerUser = async (req, res) => {
   try {
       const { name, email, password } = req.body;
       //checking
       const exists = await userModel.findOne({ email });
       if (exists) {
           return res.json({success:false, message:"User already exists"})
       }

       if (!validator.isEmail(email)) {
           return res.json({success:false, message:"Please enter a valid email"})
           
       }
       if (password.length < 8) {
           return res.json({success:false, message:"Please enter a strong password"})
       }

       
   } catch (error) {
    res.status(500).json({message: error.message})
   }
}

//route for admin login 
const adminLogin = async (req, res) => {
    const { email, password } = req.body
}

export { loginUser, registerUser, adminLogin }

