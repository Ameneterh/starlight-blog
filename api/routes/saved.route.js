import express from "express";
import { acceptedChrist } from "../controllers/saved.controller.js";

const router = express.Router();

router.post("/accepted-christ", acceptedChrist);

export default router;
