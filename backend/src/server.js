import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({ path: "./.config.env" });

connectDB();

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`backend is running for natures app in port ${port}`);
});
