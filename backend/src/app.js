//package import
import express from "express";
import cors from "cors";
//route import
import tourRouter from "#routes/tours.routes.js";
import userRouter from "#routes/users.routes.js";

//error handler middleware import
import errorHandler from "#middlewares/error.middleware.js";
import AppError from "#utils/appError.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

//middleware to parse the incoming json req into actual json req
app.use(express.json());

//this is used to parse the url
//extended true means object inside object is also allowed
app.use(express.urlencoded({ extended: true }));

//routing
app.use(`/api/v1/tours`, tourRouter);
app.use(`/api/v1/users`, userRouter);

//This point of code means that route is not handled yet
app.all("*", (req, res, next) => {
  // const err = new Error(`The route ${req.originalUrl} is not available`);
  // err.statusCode = 404;
  // err.status = `fail`;
  const err = new AppError(
    `The route ${req.originalUrl} is not available`,
    404,
  );
  next(err);
});

//middleware to handle the error
app.use(errorHandler);

export default app;
