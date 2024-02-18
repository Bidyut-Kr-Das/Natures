//model import
import User from "#models/users.model.js";

//helper function import
import catchAsyncError from "#utils/catchAsyncError.js";
import APIfeatures from "#utils/apiFeatures.js";

export const getAllUsers = catchAsyncError(async (req, res, next) => {
  const features = new APIfeatures(User.find(), req.query);
  const fullQuery = features.filter().sortOut().paginate().selectFields();
  const users = await fullQuery.query;
  res.status(200).json({
    status: "success",
    data: {
      users,
    },
  });
});
