import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "#db/index.js";

dotenv.config({ path: "./.config.env" });

connectDB();
// console.log(@routes);

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`backend is running for natours app in port ${port}`);
});
