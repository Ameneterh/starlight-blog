import express from "express";
import { subscribe } from "../controllers/subscriber.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/subscribe", subscribe);

export default router;
