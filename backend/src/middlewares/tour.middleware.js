import { readFileSync } from "fs";

let tours = readFileSync(`./public/database/tours.json`);
tours = JSON.parse(tours);

export const checkId = (req, res, next, val) => {
  //   console.log(typeof val);
  if (Number(val) > tours.length)
    return res.status(404).json({
      status: "fail",
      message: "Id not found lol",
    });
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
