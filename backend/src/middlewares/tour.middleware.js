export const checkId = (req, res, next, val) => {
  console.log(val);
  next();
};
export const checkName = (req, res, next, val) => {
  console.log(val);
  next();
};

export const checkTour = (req, res, next) => {
  // console.log(req.body);
  if (!req.body.name || !req.body.price)
    return res.status(400).json({
      status: "fail",
      message: "tours must contain 'name' and 'price' property",
    });
  next();
};
