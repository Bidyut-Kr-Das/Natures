import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const DatabaseUrl = process.env.DB_URI.replace(
      "<PASSWORD>",
      process.env.DB_PASS,
    );
    const connection = await mongoose.connect(`${DatabaseUrl}/${DB_NAME}`);
    console.log(`Connected to database.`);
  } catch (error) {
    console.log("Error: " + error);
    throw error;
  }
};

export default connectDB;
