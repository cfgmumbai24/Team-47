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

const Goat = require('./models/goat.js');
const GoatPalak = require('./models/goatPalak.js');
const GoatMitra = require('./models/goatMitra.js');
const visit = require('./models/visit.js');

// app.use(express.static())
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