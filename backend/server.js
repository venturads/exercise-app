const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routeCourses = require("./routes/courses");
require("dotenv/config");

//Middleware
app.use("/api/courses", routeCourses);

//connectDB();
const Port = process.env.Port || 5000;
app.get("/", (req, res) => {
    res.send("Hello world");
});
app.listen(5000, () => console.log('Server started'));


mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => console.log("database connected!")
);