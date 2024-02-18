import mongoose from "mongoose";
import { DB_NAME } from "#src/constants.js";

const connectDB = async () => {
  try {
    const mongoUrl = process.env.DB_URI.replace(
      `<PASSWORD>`,
      process.env.DB_PASS,
    );
    const connection = await mongoose.connect(`${mongoUrl}/${DB_NAME}`);
    // console.log("connected to database.");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
