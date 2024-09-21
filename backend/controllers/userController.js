const User = require('../appModel/userModel')

//login user controller
const loginUser = async (req, res) => {
    res.json({mssg: 'Login user'})
}


//Signup user controller

const signupUser = async (req, res) => {
    res.json({mssg: 'Signup User'})
}

module.exports = { loginUser, signupUser}