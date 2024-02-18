import { Router } from "express";

//@ controller function import
import {
  getAllTours,
  insertTour,
  getTour,
  updateTour,
  deleteTour,
} from "#controllers/tour.controller.js";

//@ middleware import
import { checkId } from "#middlewares/tour.middleware.js";

const router = Router();

router.param("id", checkId);
// router.param("name", checkName);

router.route(`/`).get(getAllTours).post(insertTour);

router.route(`/:id`).get(getTour).patch(updateTour).delete(deleteTour);

// router.route(`/:id/:name?`).get(getTour);

export default router;
