import express from "express";
import tourRouter from "#routes/tours.routes.js";

//error handler middleware import
import errorHandler from "#middlewares/error.middleware.js";

const app = express();

//middleware
app.use(express.json());

//routing
app.use(`/api/v1/tours`, tourRouter);

//This point of code means that route is not handled yet
app.all("*", (req, res, next) => {
  const err = new Error(`The route ${req.originalUrl} is not available`);
  err.statusCode = 404;
  err.status = `fail`;
  next(err);
});
//middleware to handle the error

app.use(errorHandler);

export default app;
