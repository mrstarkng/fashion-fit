
//route for login user

const loginUser = async (req, res) => {
    const { email, password } = req.body
}


//route for register user
const registerUser = async (req, res) => {
   try {
    const { name, email, password } = req.body
   } catch (error) {
    res.status(500).json({message: error.message})
   }
}

//route for admin login 
const adminLogin = async (req, res) => {
    const { email, password } = req.body
}

export { loginUser, registerUser, adminLogin }

