const express = require("express")
require('dotenv').config()
const mongoose = require('mongoose')
const mainRoutes = require('./routes/workouts')
const cors = require('cors')


const app = express(); //App

app.use(express.json()); //For every req, if has data, attached to req object

//Every time a route is fired
app.use((req, res, next) => {
    //Cors configurations to allow cross origin requests
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    console.log(req.method, res.method)
    next();
})

//Uses these routes
app.use('/api/workouts', mainRoutes) 

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



