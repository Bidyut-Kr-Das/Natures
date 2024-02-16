//package import
import express from "express";

//route import
import tourRouter from "#routes/tours.routes.js";

//error handler middleware import
import errorHandler from "#middlewares/error.middleware.js";
import AppError from "#utils/appError.js";

const app = express();

//middleware to parse the incoming json req into actual json req
app.use(express.json());

//routing
app.use(`/api/v1/tours`, tourRouter);

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
