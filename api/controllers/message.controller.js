import { errorHandler } from "../utils/error.js";
import Message from "../models/message.model.js";
import Notification from "../models/notification.model.js";

export const newMessage = async (req, res, next) => {
  const { fullname, email, message } = req.body;

  //   check if email field is completed
  if (
    !fullname ||
    !email ||
    !message ||
    fullname === "" ||
    email === "" ||
    message === ""
  ) {
    return next(errorHandler(400, "All fields are required!"));
  }

  //   save new message
  const newMessage = new Message({
    fullname,
    email,
    message,
    read: false,
  });

  try {
    await newMessage.save();
    res
      .status(201)
      .json({ success: true, message: "Your Message Sent Successfully!" });
  } catch (error) {
    next(error);
  }
};

export const getMessages = async (req, res, next) => {
  if (req.user && !req.user.isAdmin) {
    return next(errorHandler(403, "You are not allowed"));
  }

  try {
    const messages = await Message.find().sort({ createdAt: -1 });

    const totalMessages = await Message.countDocuments();

    res.status(200).json({ messages, totalMessages });
  } catch (error) {
    next(error);
  }
};

// read all notifications
export const readAllMessages = async (req, res, next) => {
  if (req.user && !req.user.isAdmin) {
    return next(errorHandler(403, "You are not allowed to read messages"));
  }
  try {
    await Message.updateMany(
      { user: req.body.userId, read: false },
      { $set: { read: true } }
    );
    res.status(200).json();
  } catch (error) {
    next(eror);
  }
};
