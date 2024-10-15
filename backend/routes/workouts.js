const express = require("express")
const {
    getAll,
    getOne,
    addWorkout,
    updateWorkout, 
    deleteWorkout
} = require('../controllers/appController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router(); //Instance of express router

//Middleware fires before routes, to protect api routes
router.use(requireAuth)

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