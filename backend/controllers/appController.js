const mongoose = require('mongoose')
const workoutmodel = require('../appModel/workoutModel')

//Home
const getAll = async (req, res) => {
    const workouts = await workoutmodel.find({}).sort({createdAt: -1})
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(workouts);
}
//Get a single workout
const getOne = async (req, res) => {
    const { id }= req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error : 'Not valid id'})
    }

    const workout = await workoutmodel.findById(id)
    if(!workout) {
        return res.status(404).json({error: 'Sorry, we couldnt find it'})
    }

    res.status(200).json(workout)
}

//Add 
const addWorkout = async (req, res) => {
    const { title, reps , weight, sets } = req.body;

    //If input field empty, add it to array
    let emptyFields = []
    if(!title) {
        emptyFields.push('title')
    }
    if(!reps) {
        emptyFields.push('reps')
    }
    if(!weight) {
        emptyFields.push('weight')
    }
    if(!sets) {
        emptyFields.push('sets')
    }

    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all fields', emptyFields})
    }

    try { //Try to create a new workout form
        const workout = await workoutmodel.create({title, reps, weight, sets})
        res.status(200).json(workout);
    } catch (error) { //If not, send error 
        res.status(400).json({error: error.message})
    }
}

//Delete 

const deleteWorkout = async (req, res) => {
    const {id} = req.params(id)

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such error found'})
    }

    const workout = await workoutmodel.findOneAndDelete({_id: id})
    if(!workout) {
        return res.status(404).json({error: 'We couldnt find what you were looking for :('})
    }

    res.status(200).json(workout)
}

//Modify
const updateWorkout = async (req, res) => {
    const { id } = req.params(id)

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid id'})
    }

    const workout = await workoutmodel.findOneAndUpdate({_id: id}, {
        ...req.body
    })
 
    if(!workout) {
        return res.status(404).json({error: 'Error'})
    }

    res.status(200).json(workout)
        
}

//Export functions as objects
module.exports = {
    getAll,
    getOne,
    addWorkout,
    updateWorkout, 
    deleteWorkout
}