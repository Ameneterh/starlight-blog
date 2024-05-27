import Saved from "../models/saved.model.js";
import { errorHandler } from "../utils/error.js";

export const acceptedChrist = async (req, res, next) => {
  const { fullname, email, phonenumber, message, tc_acceptance } = req.body;
  if (
    !fullname ||
    !email ||
    !phonenumber ||
    !message ||
    !tc_acceptance ||
    fullname === "" ||
    email === "" ||
    phonenumber === "" ||
    message === "" ||
    tc_acceptance === false
  ) {
    return next(errorHandler(400, "All fields are required!"));
  }

  const newSaved = new Saved({
    fullname,
    email,
    phonenumber,
    message,
    tc_acceptance,
  });

  try {
    await newSaved.save();
    res.json("Message Successfully Sent.");
  } catch (error) {
    next(error);
  }
};
