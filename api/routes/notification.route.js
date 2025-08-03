import express from "express";
import { notification } from "../controllers/notifcation.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/new-notification", notification);

export default router;
