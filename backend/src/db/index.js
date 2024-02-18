import mongoose from "mongoose";
import { DB_NAME } from "#src/constants.js";

const connectDB = async () => {
  const mongoUrl = process.env.DB_URI.replace(
    `<PASSWORD>`,
    process.env.DB_PASS,
  );
  const connection = await mongoose.connect(`${mongoUrl}/${DB_NAME}`);
  // console.log("connected to database.");
};

export default connectDB;
