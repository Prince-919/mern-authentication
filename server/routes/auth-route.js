import express from "express";
import { authController } from "./../controllers/index.js";

const router = express.Router();

router.route("/sign-up").post(authController.signup);

export default router;
