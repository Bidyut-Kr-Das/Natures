import { Router } from "express";
import { signUp } from "#controllers/auth.controller.js";
import { getAllUsers } from "#controllers/user.controller.js";

const router = Router();

//! root route is /api/v1/users

router.route(`/signup`).post(signUp);

router.route(`/`).get(getAllUsers);

export default router;
