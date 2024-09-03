const express = require("express")
const {
    getAll,
    getOne,
    addWorkout,
    updateWorkout, 
    deleteWorkout
} = require('../controllers/appController')

const router = express.Router(); //Instance of express router

//Each router has a controller attached to it
//Home
router.get('/', getAll)

//Get certain workout
router.get('/:id', getOne)

//Add
router.post('/', addWorkout)

//Delete
router.delete('/:id', deleteWorkout)

//Modify
router.patch('/:id', updateWorkout)

//Eventually, login/create new account page

module.exports = router;