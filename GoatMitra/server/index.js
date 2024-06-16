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
const body=require("body-parser");

const Goat = require('./models/goat.js');
const GoatPalak = require('./models/goatPalak.js');
const GoatMitra = require('./models/goatMitra.js');
const visit = require('./models/visit.js');



// app.use(express.static())
app.use(express.json());
app.use(cors());
app.use(body.json());
app.use(body.urlencoded({ extended: true }));

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
            id = last_value.goatPalakId + 1;
        } else {
            id = 1;
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

app.post('/login', async (req, res) => {
    let mitra = await GoatMitra.findOne({username:req.body.username});
    if (mitra){
        const passCompare = req.body.password === mitra.password;
        if (passCompare){
            const data = {
                mitra:{
                    username:req.body.username
                }
            }
            const token = jwt.sign(data, 'secret');
            res.json({success:true, token});
        }else{
            res.json({success:false, errors:"wrong password"});
        }
    }else{
        res.json({success:false, errors:"User does not exist"})
    }
})

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

// API endpoints for Goats

// GET
app.get('/:id/goats', async (req, res) => {
    try {
        const { id } = req.params;
        let goatPalaks = await Goat.find({ goatPalakId: id });
        res.json(goatPalaks);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error retrieving goat palaks' });
    }
});

app.get('/goats', async (req, res) => {
    try {
        const goats = await Goat.find(); // Fetch all goats

        res.json(goats);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error retrieving goats' });
    }
});

// ADD
app.post('/:gId/goats/add', async (req, res) => {
    try {
        const { gId } = req.params;
        let goats = await Goat.find({});
        let id;

        if (goats.length > 0) {
            let last_value = goats.slice(-1)[0];
            id = 1 + last_value.id;
        } else {
            id = 1;
        }
        const newGoat = new Goat({
            id: id,
            name: req.body.name,
            gender: req.body.gender,
            dob: new Date(req.body.dob),
            goatPalakId: Number(gId),
            vaccinationDate: new Date(req.body.vaccinationDate)
        });

        await newGoat.save();
        console.log("Goat saved");

        res.json({
            success: true,
            name: req.body.name,
            goatPalakId: gId
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating goat' });
    }
});

// DELETE
app.post('/:id/goats/:gId/delete', async (req, res) => {
    try {
        const { id, gId } = req.params;
        await Goat.findOneAndDelete({ id: gId });
        console.log("Goat removed");
        res.json({
            success: true,
            id: gId
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting goat' });
    }
});

// PUT
app.put('/:id/goats/:gId/update', async (req, res) => {
    try {
        const { id, gId } = req.params;
        const goat = await Goat.findOneAndUpdate({ id: gId }, req.body);
        if (!goat) {
            return res.status(404).json({ message: `cannot find any Goat with ID ${gId}` })
        }
        res.status(200).json(goat);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



//goat mitra
//create
app.post('/goatMitra/add', async (req, res) => {
    try {
        const { username, password, name, area, phoneNumber } = req.body;
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
        const { username } = req.params;
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


app.post('/goat/visit', async (req, res) => {
    try {
        const { goatMitraId, goatId, visitDate, height, weight, disease } = req.body;

        const visitCreated = await visit.create({
            goatMitraId,
            goatId,
            visitDate,
            height,
            weight,
            disease
        });

        if (visitCreated) {
            await visitCreated.save();
            return res.status(200).json({
                success: true,
                message: "Visit created successfully"
            });
        } else {
            return res.status(500).json({
                success: false,
                message: "Failed to create visit"
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});


const getVisit = async (req, res) => {
    try {
        const visit = await Visit.find({});
        res.status(200).json({
            success: true,
            visit
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

const getVisitByGoat = async (req, res) => {
    try {
        const visit = await Visit.find({ goat: req.params.id });
        res.status(200).json({
            success: true,
            visit
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

app.listen(port, (error) => {
    if (!error) {
        console.log("Server running on port: " + port);
    } else {
        console.log("Error: " + error);
    }
});