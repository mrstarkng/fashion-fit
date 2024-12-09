import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js"
//route for login user

const createToken = (id) => {
    return jwt.sign({id}, )
}

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

       //hashing user password

       const salt = await bcrypt.genSalt(10)

       const hashedPassword = await bcrypt.hash(password, salt)

       const newUser = new userModel({
           name,
           email,
           password: hashedPassword

       })

       const user = await newUser.save() 

       const token = createToken(user._id)

       res.json({success:true, token, })




   } catch (error) {
       consolelog(error);
       res.json({success:false, message:error.message})
   }
}

//route for admin login 
const adminLogin = async (req, res) => {
    const { email, password } = req.body
}

export { loginUser, registerUser, adminLogin }

