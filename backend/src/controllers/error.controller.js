import AppError from "#utils/appError.js";

// call this funciton when we are in development mode
const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

//call this funciton when we are in production mode
const sendErrorProduction = (err, res) => {
  //(IN PRODUCTION)we will only show our error to client when we trust the error otherwise if the error comes from third party libraries then this may cause data leak if we show the error
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
  //show the generic error if the error does not come from our code or we do not trust the error
  console.error(err); //<- error will be shown in the server console
  res.status(500).json({
    error: `error`,
    message: `something went wrong`,
  });
};

//Type cast error handler function
const handleCastErrorDB = (error) => {
  const message = `Invalid ${error.path}: ${error.value}`;
  return new AppError(message, 400);
};

//duplication error in database handler function
const handleDuplicateFieldsDB = (error) => {
  const key = Object.keys(error.keyPattern);
  // console.log(key[0]);
  const value = error.keyValue[key[0]]; //<- Using expression syntax of object to get the property name
  const message = `The ${key[0]}:${value} already exists. Please use another value`;
  return new AppError(message, 400);
};

//function to handle validation error
const handleValidationErrorDB = (error) => {
  const errors = Object.values(error.errors).map((errorElement) => {
    // <- taking each property of the error.errors an array is created then we can use the map method to iterate over the element and access the message of that error
    return errorElement.message;
  });
  const message = `Invalid input data ${errors.join("\n")}`;
  return new AppError(message, 400);
};

export {
  sendErrorDev,
  sendErrorProduction,
  handleCastErrorDB,
  handleDuplicateFieldsDB,
  handleValidationErrorDB,
};
