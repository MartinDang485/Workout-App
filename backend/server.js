const express = require("express")
require('dotenv').config()
const mongoose = require('mongoose')
const mainRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
const cors = require('cors')


const app = express(); //App

app.use(express.json()); //For every req, if has data, attached to req object

//Every time a route is fired
app.use((req, res, next) => {
    //Cors configurations to allow cross origin requests

    if(req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
        res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        return res.status(200).json({})
    }
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')


    console.log(req.method, res.method)
    next();
})

//Uses these routes
app.use('/api/workouts', mainRoutes) 
app.use('/api/user', userRoutes)

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'PUT', 'POST', 'DELETE']
}));

//Connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to database');
        //Listen on port after connected to db
        app.listen(process.env.PORT, () => {
            console.log('Listening on Port')
        })
    })
    .catch((error) => console.log(error))



