const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

//Static signup
userSchema.statics.signup = async function (email, password) {

    //Validate password and email
    if(!email|| !password) {
        throw Error('Please fill in all required fields')
    }

    if(!validator.isEmail(email)) {
        throw Error('Please fill in valid email')
    }

    if(!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }

    //Check to see if email already exists
    const exists = await this.findOne({ email })

    if (exists) {
        throw Error('Email Already Exists')
    }

    //salt and hashing user info
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    //Create and return user
    const user = await this.create({email, password: hash})

    return user
}

//Static login function
userSchema.statics.login = async function (email, password) {
    //Email and password field validation
    if (!email || !password) {
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({email})
    if(!user) {
        throw Error('Incorrect Login Credentials')
    }

    const match = await bcrypt.compare(password, user.password)
    if(!match) {
        throw Error('Incorrect Login Credentials')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)