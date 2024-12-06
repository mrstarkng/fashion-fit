
//route for login user

const loginUser = async (req, res) => {
    const { email, password } = req.body
}


//route for register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body
}

//route for logout user
const logoutUser = async (req, res) => {
    res.json({ message: 'Logout successful' })
}
