import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "#db/index.js";
import { DB_NAME } from "./constants.js";

process.on(`uncaughtException`, (error) => {
  console.log(`uncaught exception occured Shutting down`);
  console.log(`${error.name}:${error.message}`);
  process.exit(1);
});

dotenv.config({ path: "./.config.env" });

connectDB().then(() => {
  console.log(`connected to the database ${DB_NAME}`);
});
// console.log(@routes);

const port = process.env.PORT || 3002;
const server = app.listen(port, () => {
  console.log(
    `backend is running in ${process.env.NODE_ENV} mode for natours app in port ${port}`,
  );
});

//for each unhandled promise rejection a object is created named unhandledRejection and we can use it to catch the unhandled promise rejections
process.on(`unhandledRejection`, (error) => {
  console.log(`${error.name}:${error.message}`);
  console.log(`Shutting down..`);
  server.close(() => {
    process.exit(1);
  });
});
