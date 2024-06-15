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

// APIs for Goat Palaks

// GET
app.get('/goatpalaks', async (req, res) => {
    try {
        let goatPalaks = await GoatPalak.find({});
        res.json(goatPalaks);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error retrieving goat palaks' });
    }
});

// ADD
app.post('/goatpalaks/add', async (req, res) => {
    try {
        let owners = await GoatPalak.find({});
        let id;
        if (owners.length > 0) {
            let last_value = owners.slice(-1)[0];
            id = (1 + Number(last_value.goatPalakId)).toString();
        } else {
            id = "1";
        }
        const palak = new GoatPalak({
            goatPalakId: id,
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            area: req.body.area,
            address: req.body.address
        })
        await palak.save();
        console.log("Goat Palak saved");
        res.json({
            success: true,
            name: req.body.name,
            area: req.body.area
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating goat palak' });
    }
});

// DELETE
app.post('/goatpalaks/:id/delete', async (req, res) => {
    try {
        const { id } = req.params;
        await GoatPalak.findOneAndDelete({ goatPalakId: id });
        console.log("Palak removed");
        res.json({
            success: true,
            id: id
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting goat palak' });
    }
});

// PUT
app.put('/goatpalaks/:id/update', async (req, res) => {
    try {
        const { id } = req.params;
        const owner = await GoatPalak.findOneAndUpdate({ goatPalakId: id }, req.body);
        if (!owner) {
            return res.status(404).json({ message: `cannot find any Goat Palak with ID ${goatPalakId}` })
        }
        res.status(200).json(owner);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


//goat mitra
//create
app.post('/goatMitra/add', async (req, res) => {
    try {
        const { username,password,name,area, phoneNumber } = req.body;
        const mitra = new GoatMitra({
            username: req.body.username,
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            area: req.body.area,
            password: req.body.password
        })
        await mitra.save();
        console.log("Goat Mitra saved");
        res.json({
            success: true,
            area: req.body.area
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating goat mitra' });
    }
});

//get
app.get('/goatMitra/:username', async (req, res) => {
    try {
        const {username} = req.params;
        let goatMitra = await GoatMitra.findOne({ username });
        if (!goatMitra) {
            res.status(404).json({ message: `GoatMitra not found with username ${username}` });
        } else {
            res.json(goatMitra);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error retrieving goat mitra' });
    }
});

//put
app.put('/goatMitra/:username/update', async (req, res) => {
    try {
        const { username } = req.params;
        const mitra = await GoatMitra.findOneAndUpdate({ username: username }, req.body);
        if (!mitra) {
            return res.status(404).json({ message: `cannot find any Goat Palak with ID ${goatPalakId}` })
        }
        res.status(200).json(mitra);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//visits
//add


app.listen(port, (error) => {
    if (!error) {
        console.log("Server running on port: " + port);
    } else {
        console.log("Error: " + error);
    }
});