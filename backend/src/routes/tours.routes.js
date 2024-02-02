import express from "express";
import {
  getAllTours,
  insertTour,
  getTour,
  updateTour,
  deleteTour,
} from "../controllers/tour.controller.js";

const router = express.Router();

router.route(`/`).get(getAllTours).post(insertTour);

router.route(`/:id`).get(getTour).patch(updateTour).delete(deleteTour);

export default router;
