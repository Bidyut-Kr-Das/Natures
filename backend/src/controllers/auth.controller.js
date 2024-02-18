import User from "#models/users.model.js";
import catchAsyncError from "#utils/catchAsyncError.js";

export const signUp = catchAsyncError(async (req, res, next) => {
  const newUser = await User.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
});
