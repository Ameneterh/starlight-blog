import express from "express";
import {
  newMessage,
  getMessages,
  readAllMessages,
} from "../controllers/message.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/new-message", newMessage);
router.get("/get-messages", getMessages);
router.get("/read-all-messages", readAllMessages);

export default router;
