import { Tour } from "#models/tours.model.js";
import APIfeatures from "#utils/apiFeatures.js";
import AppError from "#utils/appError.js";

//helper functon
import catchAsyncError from "#utils/catchAsyncError.js";

//get all tours
export const getAllTours = catchAsyncError(async (req, res, next) => {
  const features = new APIfeatures(Tour.find(), req.query);
  const finalQuery = features.filter().paginate().sortOut().selectFields();
  const tours = await finalQuery.query;
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      tours,
    },
  });
});

//insert a new tour
export const insertTour = catchAsyncError(async (req, res, next) => {
  const tour = await Tour.create(req.body);
  // console.log(tour);
  res.status(201).json({
    status: "success",
    data: {
      tour,
    },
  });
});

//
export const getTour = catchAsyncError(async (req, res, next) => {
  const feature = new APIfeatures(Tour.findById(req.params.id), req.query);
  const finalQueryObject = feature.selectFields();
  const tour = await finalQueryObject.query;
  if (!tour)
    return next(
      new AppError(`Tour with ${req.params.id} id does not exist`, 404),
    );
  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
});

export const updateTour = catchAsyncError(async (req, res, next) => {
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
  if (!tour)
    return next(
      new AppError(`Tour with ${req.params.id} id does not exist`, 404),
    );
  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
});

export const deleteTour = catchAsyncError(async (req, res, next) => {
  const tour = await Tour.findOneAndDelete({
    _id: req.params.id,
  });

  // if (!tour)
  //   return next(new AppError(`Can not delete tour that does not exist`, 404));

  res.status(204).json({
    status: "success",
    message: "tour deleted",
  });
});
