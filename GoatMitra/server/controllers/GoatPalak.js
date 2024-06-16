import goatMitra from "../models/goatMitra.js";
import GoatPalak from "../models/goatPalak.js";

const registerGoatPalaks = async (req, res) => {
    try {
        const goatPalakData = req.body.goatPalakData;
        const createdPalaks = [];

        for (let data of goatPalakData) {
            const { name, phoneNumber, area, address } = data;
            
            const goatPalakExists = await GoatPalak.findOne({ phoneNumber });

            if (goatPalakExists) {
                // Skip existing GoatPalak
                continue;
            }

            const goatPalakCreated = await GoatPalak.create({
                name,
                phoneNumber,
                area,
                address,
            });

            if (goatPalakCreated) {
                createdPalaks.push(goatPalakCreated);
            }
        }


        res.status(200).json({
            success: true,
            message: `${createdPalaks.length} GoatPalaks created successfully`,
            data: createdPalaks,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

const registerGoatPalak = async (req, res) => {
    try {
        const { name, phoneNumber, area, address } = req.body;
    
        const goatPalakExists = await GoatPalak.findOne({ phoneNumber });
    
        if (goatPalakExists) {
        res.status(400).json({
            success: false,
            message: "User already exists",
        });
        }
    
        const goatPalakCreated = await GoatPalak.create({
        name,
        phoneNumber,
        area,
        address,
        });
    
        if (goatPalakCreated) {
        res.status(200).json({
            success: true,
            message: "User created successfully",
        });
        }
    } catch (error) {
        return res.status(500).json({
        success: false,
        message: "Internal server error",
        });
    }
};

const getGoatPalakByarea = async(req,res) =>{
    try {
        const {area} = req.body;
        const goatPalaks = await GoatPalak.find({area});
        return res.status(200).json({
            success:true,
            goatPalaks
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}

const getGoatPalak = async (req, res) => {
    try {
        const goatPalak = await GoatPalak.find({});
        return res.status(200).json({
        success: true,
        goatPalak,
        });
    } catch (error) {
        return res.status(500).json({
        success: false,
        message: "Internal server error",
        });
    }
};

export { registerGoatPalak, getGoatPalak, registerGoatPalaks,getGoatPalakByarea };