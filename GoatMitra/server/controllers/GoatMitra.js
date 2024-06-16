import goatMitra from "../models/goatMitra.js";
import generateToken from "../utils/generateToken.js";

const registerGoatMitra = async (req, res) => {
  try {
    const { name, password, email, username, phoneNumber, area } = req.body;

    const goatMitraExists = await goatMitra.findOne({ email });

    if (goatMitraExists) {
      res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const goatMitraCreated = await goatMitra.create({
      name,
      password,
      email,
      username,
      phoneNumber,
      area,
    });

    if (goatMitraCreated) {
      generateToken(res, goatMitraCreated._id);
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

const loginGoatMitra = async (req, res) => {
  try {
    const { email, password } = req.body;

    const goatMitraExists = await goatMitra.findOne({ email });

    if (goatMitraExists && (await goatMitraExists.matchPasswords(password))) {
      generateToken(res, goatMitraExists._id);
      res.status(200).json({
        success: true,
        message: "User logged in successfully",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


export { registerGoatMitra, loginGoatMitra };