const catchAsyncError = (requestHandler) => {
  //This function will return a function that will be called by express when this controller is needed
  return (req, res, next) => {
    requestHandler(req, res, next).catch((err) => {
      next(err);
    });
  };
};
export default catchAsyncError;
