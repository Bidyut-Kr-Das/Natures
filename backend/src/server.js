import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.config.env" });

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`backend is running for natures app in port ${port}`);
});
