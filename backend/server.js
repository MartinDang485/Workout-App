const express = require("express")
require('dotenv').config()
const mongoose = require('mongoose')
const mainRoutes = require('./routes/workouts')
const cors = require('cors')


const app = express(); //App

app.use(express.json()); //For every req, if has data, attached to req object

//Every time a route is fired
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log(req.method, res.method)
    next();
})

//Uses these routes
app.use('/api/workouts', mainRoutes) 

app.use(cors());

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



