import User from "#models/users.model.js";
import catchAsyncError from "#utils/catchAsyncError.js";

export const signUp = catchAsyncError(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });
  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
});
