import { model, Schema } from "mongoose";
import validator from "validator";

//middleware import
import { passwordEncryption } from "#middlewares/user.middleware.js";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, `user must have a name`],
      minlength: [5, `name must contain 5 or more characters`],
    },
    email: {
      type: String,
      required: [true, `user must have an email id`],
      unique: true,
      minlength: [5, `name must contain 5 or more characters`],
      lowercase: true,
      validate: [validator.isEmail, `Please provide a valid email id`],
    },
    photo: {
      type: String,
    },
    password: {
      type: String,
      required: [true, `user must provide a password`],
      minlength: [5, `password must contain 5 or more characters`],
    },
    confirmPassword: {
      type: String,
      required: [true, `user must provide a password`],
      minlength: [5, `password must contain 5 or more characters`],
    },
  },
  {
    timestamps: true,
  },
);

//calling pre middleware to encrypt the password before saving to database
userSchema.pre(`save`, passwordEncryption);

const User = model("User", userSchema);

export default User;
