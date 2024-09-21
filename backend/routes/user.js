const express = require('express')
//User Controllers
const { loginUser, signupUser} = require('../controllers/userController')

const router = express.Router()

//login route
router.post('/login' , loginUser)

//singup router
router.post('/signup', signupUser)

module.exports = router