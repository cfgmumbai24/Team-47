require('dotenv').config();

const port = process.env.PORT;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const path = require("path");
const { log } = require('console');
const { type } = require('os');

app.use(express.json());
app.use(cors());

const uri = process.env.MONGODB_URL;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('MongoDB connection error:', err));

// API Creation
app.get("/", (req, res) => {
    res.send("Express App is running")
})

app.listen(port, (error) => {
    if (!error) {
        console.log("Server running on port: " + port);
    } else {
        console.log("Error: " + error);
    }
});