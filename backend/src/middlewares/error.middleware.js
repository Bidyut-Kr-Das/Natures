//default express error middleware that will be called automatically when err is passed in next function
import {
  sendErrorDev,
  sendErrorProduction,
  handleCastErrorDB,
  handleDuplicateFieldsDB,
} from "#controllers/error.controller.js";

const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500; //<- default status code is 500
  err.status = err.status || `error`; //<- default status is error
  if (process.env.NODE_ENV === `development`) {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === `production`) {
    let error = { ...err };
    if (err.name === `CastError`) error = handleCastErrorDB(error);
    if (err.code === 11000) error = handleDuplicateFieldsDB(error);
    sendErrorProduction(error, res);
  }
};
export default errorHandler;
