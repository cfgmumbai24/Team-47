import Goat from "../models/goat.js";
import GoatPalak from "../models/goatPalak.js";
import Visit from "../models/visit.js";
import goatMitra from "../models/goatMitra.js";

const registerGoats = async (req, res) => {
    try {
        const { goatData, goatPalak } = req.body;
        const Palak = await GoatPalak.findById(goatPalak);

        if (!Palak) {
            return res.status(400).json({
                success: false,
                message: "Palak not found"
            });
        }

        const goatIds = [];
        for (let goat of goatData) {
            const { name, gender, dob, vaccinationDate } = goat;
            const goatCreated = await Goat.create({
                name,
                gender,
                dob,
                vaccinationDate
            });

            goatIds.push(goatCreated._id);
        }

        Palak.goats.push(...goatIds);
        await Palak.save();

        res.status(200).json({
            success: true,
            message: "Goats registered successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}


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
        const goat = await Goat.findById(req.params.id).populate('visits');
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
        const {goatId , goatMitraId,visitDate,height,weight,disease} = req.body;
        const goatExists = await Goat.findById(goatId);

        if(!goatExists){
            res.status(400).json({
                success: false,
                message: "Goat not found"
            });
        }

        const visitCreated = await Visit.create({
            goatMitraId,
            goatId,
            visitDate,
            height,
            weight,
            disease
        });

        if(visitCreated){
            goatExists.visits.push(visitCreated._id);
            await goatExists.save();
            return res.status(200).json({
                success: true,
                message: "Visit created successfully"
            });
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

const registerVisits = async(req,res) =>{
    try {
        const {visitData} = req.body;
        for(let visit of visitData){
            const {goatId , goatMitraId,visitDate,height,weight,disease} = visit;
            const goatExists = await Goat.findById(goatId);
    
            if(!goatExists){
                res.status(400).json({
                    success: false,
                    message: "Goat not found"
                });
            }
    
            const visitCreated = await Visit.create({
                goatMitraId,
                goatId,
                visitDate,
                height,
                weight,
                disease
            });
    
            if(visitCreated){
                goatExists.visits.push(visitCreated._id);
                await goatExists.save();
            }
        }
        return res.status(200).json({
            success: true,
            message: "Visit created successfully"
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
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



export { registerGoat, getGoat, getGoatById, getPalakGoats, registerVisit, getVisit, getVisitByGoat,registerGoats,registerVisits };