const User = require('../appModel/userModel')
const jwt = require('jsonwebtoken')

const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers

    if(!authorization) {
        return res.status(401).json({error: 'Authorization token required'})
    }

    const token = authorization.split(' ')[1]

    try {
        const { _id } = jwt.verify(token, process.env.SECRET)
        req.user = await User.findOne({_id}).select('_id')
        next()
        
    } catch (error) {
        console.log(error)
        res.status(401).json({error: 'Couldnt get token, request not authorized'})
    }
}

module.exports = requireAuth