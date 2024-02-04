// import { json } from "express";

import { Tour } from "#models/tours.model.js";

//get all tours
export const getAllTours = async (req, res) => {
  try {
    const filteredQuery = { ...req.query };
    const excludingQueries = ["field", "page", "sort", "limit"];
    excludingQueries.forEach((queryElement) => {
      delete filteredQuery[queryElement];
    });

    const tours = await Tour.find(filteredQuery);
    res.status(200).json({
      status: "success",
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

//insert a new tour
export const insertTour = async (req, res) => {
  try {
    const tour = await Tour.create(req.body);
    // console.log(tour);
    res.status(201).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

//
export const getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour)
      return res.status(404).json({
        status: "fail",
        message: "tour does not exist",
      });
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

export const updateTour = async (req, res) => {
  try {
    const tour = await Tour.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      req.body,
      {
        new: true, //<-- This returns the new updated document if set to true otherwise return the acknowledgement statement
        // runValidator: true,
      },
    );
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

export const deleteTour = async (req, res) => {
  try {
    await Tour.findOneAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      message: "tour deleted",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
