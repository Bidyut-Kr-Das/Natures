import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "#db/index.js";
import { DB_NAME } from "./constants.js";

dotenv.config({ path: "./.config.env" });

connectDB()
  .then(() => {
    console.log(`connected to the database ${DB_NAME}`);
  })
  .catch((error) => {
    console.log(error);
  });
// console.log(@routes);

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`backend is running for natours app in port ${port}`);
});
