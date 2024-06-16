import goatMitra from "../models/goatMitra.js";
import generateToken from "../utils/generateToken.js";

const registerGoatMitra = async (req, res) => {
  try {
    const { name, password, email, username, phoneNumber, area } = req.body;

    const goatMitraExists = await goatMitra.findOne({ email });

    if (goatMitraExists) {
      return res.status(400).json({
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

    generateToken(res, goatMitraCreated._id);
    return res.status(200).json({
      success:true,
      id: goatMitraCreated._id,
        name: goatMitraCreated.name,
        email: goatMitraCreated.email,
        username: goatMitraCreated.username,
        phoneNumber: goatMitraCreated.phoneNumber,
        area: goatMitraCreated.area,
    });
  } catch (error) {
  console.log(error)
    return res.status(500).json({
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
      return res.status(200).json({
        success:true,
        id: goatMitraExists._id,
        name: goatMitraExists.name,
        email: goatMitraExists.email,
        username: goatMitraExists.username,
        phoneNumber: goatMitraExists.phoneNumber,
        area: goatMitraExists.area,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


export { registerGoatMitra, loginGoatMitra };