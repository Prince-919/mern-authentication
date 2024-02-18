import express from "express";
import { userController } from "../controllers/index.js";

const router = express.Router();

router.route("/sign-up").post(userController.signup);

export default router;
