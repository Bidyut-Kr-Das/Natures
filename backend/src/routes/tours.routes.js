import { Router } from "express";

//@ controller function import
import {
  getAllTours,
  insertTour,
  getTour,
  updateTour,
  deleteTour,
} from "../controllers/tour.controller.js";

//@ middleware import
import { checkId, checkTour } from "../middlewares/tour.middleware.js";

const router = Router();

router.param("id", checkId);

router.route(`/`).get(getAllTours).post(checkTour, insertTour);

router.route(`/:id`).get(getTour).patch(updateTour).delete(deleteTour);

export default router;
