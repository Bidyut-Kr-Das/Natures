import { Schema, model } from "mongoose";

const tourSchema = new Schema({
  // id: Number,
  name: {
    type: String,
    required: [true, "Tour must have a name property."],
    unique: true,
    trim: true,
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
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  startDates: [Date],
});

export const Tour = model("Tour", tourSchema);
