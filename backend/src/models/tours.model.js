import { Schema, model } from "mongoose";

const tourSchema = new Schema(
  {
    // id: Number,
    name: {
      type: String,
      required: [true, "Tour must have a name property."],
      unique: true,
      trim: true,
      maxlength: [20, `name must have less than or equal to 20 characters`],
      minlength: [10, `name must have greater than or equal to 10 characters`],
    },
    duration: {
      type: Number,
      required: [true, "tour must have a duration property."],
      // unique: true,
    },
    maxGroupSize: {
      type: Number,
      required: [true, "tour must have a group size"],
    },
    priceDiscount: Number,
    summary: {
      type: String,
      trim: true,
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      max: [5, `The rating must be less than or equal to 5`],
      min: [1, `The rating must be greater than or equal to 1`],
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Tour must have a price property."],
      // select: false,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, "A tour must have a cover image"],
    },
    images: {
      type: [String],
    },
    difficulty: {
      type: String,
      required: [true, "A tour must have a difficulty"],
      enum: ["easy", "medium", "difficult"],
    },

    startDates: [Date],
  },
  { timestamps: true },
);

export const Tour = model("Tour", tourSchema);
