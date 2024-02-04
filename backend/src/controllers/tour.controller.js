// import { json } from "express";

import { Tour } from "#models/tours.model.js";

//get all tours
export const getAllTours = async (req, res) => {
  try {
    //Build the query
    const originalQuery = { ...req.query };
    const excludingQueries = ["field", "page", "sort", "limit"];
    excludingQueries.forEach((queryElement) => {
      delete originalQuery[queryElement];
    });

    //converting the object into string then using regex to find all the occurence in that string \b checks for exact match and g at the end of regex finds all occurence the replace command returns the matched string with replaced string

    let filteredQuery = JSON.stringify(originalQuery);
    filteredQuery = filteredQuery.replace(/\b(gt|gte|lt|lte)\b/g, (match) => {
      return `$${match}`;
    });
    // console.log(JSON.parse(filteredQuery));

    const query = Tour.find(JSON.parse(filteredQuery)); //<-- As model.find() returns a query and we can chain this with multiple option and later await for the query to get executed and return the result

    //Executing the query by awaiting for it
    const tours = await query;

    //Sending the response
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
