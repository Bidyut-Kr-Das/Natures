// import { json } from "express";
import { readFileSync } from "fs";

let tours = readFileSync(`./public/database/tours.json`);
tours = JSON.parse(tours);
export const getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      tours,
    },
  });
};
export const insertTour = (req, res) => {
  const newId = tours[tours.length - 1].id;
  const tour = Object.assign({ id: newId + 1 }, req.body);
  tours.push(tour);
  res.status(201).json({
    status: "success",
    data: {
      tours,
    },
  });
};

export const getTour = (req, res) => {
  // console.log(req.params);
  const id = Number(req.params.id);

  //Checking if the id is invalid or not
  if (id > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid Id",
    });
  }

  //find returns the first matching element
  const tour = tours.find((element) => {
    return element.id === id;
  });
  res.status(200).json({
    status: "Success",
    data: {
      tour,
    },
  });
};

export const updateTour = (req, res) => {
  const tour = tours.find((element) => element.id === Number(req.params.id));
  if (!tour)
    return res.status(404).json({
      status: "fail",
      message: "Invalid Id",
    });
  res.status(200).json({
    status: "success",
    data: "Updated the tour",
  });
};

export const deleteTour = (req, res) => {
  const tour = dataB.find((element) => {
    return element.id === Number(req.params.id);
  });
  if (!tour)
    return res.status(404).json({
      status: "fail",
      message: "Id not found",
    });
  res.status(204).json({
    status: "success",
    data: null,
  });
};
