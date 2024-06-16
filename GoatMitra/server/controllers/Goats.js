import Goat from "../models/goat.js";
import GoatPalak from "../models/goatPalak.js";
import Visit from "../models/visit.js";
import goatMitra from "../models/goatMitra.js";

const registerGoat = async (req, res) => {
    try {
        const {name,gender,dob,vaccinationDate,goatPalak} = req.body;
        const Palak = await GoatPalak.findById(goatPalak);

        if(!Palak){
            res.status(400).json({
                success: false,
                message: "Palak not found"
            });
        }

        const goatCreated = await Goat.create({
            name,
            gender,
            dob,
            vaccinationDate,
        });

        if(goatCreated){
            Palak.goats.push(goatCreated._id);
            await Palak.save();
            res.status(200).json({
                success: true,
                message: "Goat created successfully"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

const getGoat = async (req, res) => {
    try {
        const goat = await Goat.find({});
        res.status(200).json({
            success: true,
            goat
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

const getGoatById = async (req, res) => {
    try {
        const goat = await Goat.findById(req.params.id);
        res.status(200).json({
            success: true,
            goat
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

const getPalakGoats = async (req, res) => {
   try {
         const Palak = await GoatPalak.findById(req.params.id).populate('goats');
         res.status(200).json({
              success: true,
              Palak
         });
   } catch (error) {
        res.status(500).json({
                success: false,
                message: "Internal server error"
        });
   }
}

const registerVisit = async (req, res) => {
    try {
        const {goat,visitDate,weight,temperature,healthCondition} = req.body;
        const goatExists = await Goat.findById(goat);

        if(!goatExists){
            res.status(400).json({
                success: false,
                message: "Goat not found"
            });
        }

        const visitCreated = await Visit.create({
            goat,
            visitDate,
            weight,
            temperature,
            healthCondition
        });

        if(visitCreated){
            goatExists.visits.push(visitCreated._id);
            await goatExists.save();
            res.status(200).json({
                success: true,
                message: "Visit created successfully"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

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
        const visit = await Visit.find({goat:req.params.id});
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

export { registerGoat, getGoat, getGoatById, getPalakGoats, registerVisit, getVisit, getVisitByGoat };