const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutLift = new Schema({
    title : {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('workoutmodel', workoutLift)