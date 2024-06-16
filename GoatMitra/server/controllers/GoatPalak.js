import goatMitra from "../models/goatMitra.js";
import GoatPalak from "../models/goatPalak.js";

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
        res.status(500).json({
        success: false,
        message: "Internal server error",
        });
    }
};

const getGoatPalak = async (req, res) => {
    try {
        const goatPalak = await GoatPalak.find({});
        res.status(200).json({
        success: true,
        goatPalak,
        });
    } catch (error) {
        res.status(500).json({
        success: false,
        message: "Internal server error",
        });
    }
};

export { registerGoatPalak, getGoatPalak };