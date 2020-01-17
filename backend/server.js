const express = require('express');
const connectDB = require('./connection');
const app = express();

//connectDB();
const Port = process.env.Port || 5000;

app.listen(Port, () => console.log('Server started'));