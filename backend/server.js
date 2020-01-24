const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

require("dotenv").config();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const routeCourses = require("./routes/courses");

//Middleware
app.use("/api/courses", routeCourses);

//connectDB();
const Port = process.env.Port || 5000;

app.get("/", (req, res) => {
    res.send("Hello world");
});
app.listen(5000, () => console.log('Server started'));

const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, () => console.log("database connected!")
);