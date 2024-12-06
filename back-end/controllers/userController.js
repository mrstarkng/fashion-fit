
//route for login user

const loginUser = async (req, res) => {
    const { email, password } = req.body
}


//route for register user
const registerUser = async (req, res) => {
   res.json({message: ' Register API is working'})
}

//route for admin login 
const adminLogin = async (req, res) => {
    const { email, password } = req.body
}

export { loginUser, registerUser, adminLogin }

