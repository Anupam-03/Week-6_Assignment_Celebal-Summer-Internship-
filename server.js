const express = require("express");
const mongoose = require("mongoose");

require('dotenv').config();

const app = express();


// set up mongoDB connection
mongoose.connect(process.env.DATABASE_URL);
const DB = mongoose.connection;
DB.on('error', (error) => {
    console.error(error);
});
DB.once('open', () => {
    console.log("Database Connection successful");
});

// To accept JSON in our server
app.use(express.json());

// To setup the routes
const userRouter = require('./routes/users');
app.use('/users', userRouter);



app.listen('5000', () => {
    console.log("Server Running...");
});
