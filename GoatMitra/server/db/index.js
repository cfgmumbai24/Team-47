import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const mongoURI=process.env.MONGODB_URL;
    const connection = await mongoose.connect(mongoURI);
    console.log(`MongoDB connected : ${connection.connection.host}`);
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  }
};

export default ConnectDB;
