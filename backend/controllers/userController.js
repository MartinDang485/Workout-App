const User = require('../appModel/userModel')
require('dotenv').config()
const jwt = require('jsonwebtoken')


//Create token function
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'})
}


//login user controller
const loginUser = async (req, res) => {
    const { email, password } = req.body
    
    try {
        const user = await User.login(email, password)

        //Create token
        const token = createToken(user._id)
        res.status(200).json({email, token})
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


//Signup user controller
const signupUser = async (req, res) => {
    const { email, password } = req.body

    try {
        //Create user
        const user = await User.signup(email, password)

        //create token
        token = createToken(user._id)

        res.status(200).json({email, token})
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { loginUser, signupUser}