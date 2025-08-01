import { errorHandler } from "../utils/error.js";
import Subscriber from "../models/subscriber.model.js";
import bcryptjs from "bcryptjs";

export const subscribe = async (req, res, next) => {
  const { email } = req.body;
  if (!email || email === "") {
    return next(errorHandler(400, "All fields are required!"));
  }

  const newSubscriber = new Subscriber({
    email,
  });

  try {
    await newSubscriber.save();
    res.json("You Subscribed Successfully!");
  } catch (error) {
    next(error);
  }
};

export const unsubscribe = async (req, res, next) => {
  if (!req.user.isAdmin && req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to delete this user"));
  }
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(200).json("User has been deleted");
  } catch (error) {
    next(error);
  }
};

export const getSubscribers = async (req, res, next) => {
  // if (!req.user.isAdmin) {
  //   return next(errorHandler(403, "You are not allowed to see all users"));
  // }

  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const sortDirection = req.query.sort === "asc" ? 1 : -1;

    const users = await User.find()
      .sort({ createdAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const usersWithoutPassword = users.map((user) => {
      const { password, ...rest } = user._doc;
      return rest;
    });

    const totalUsers = await User.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );
    const lastMonthUsers = await User.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      users: usersWithoutPassword,
      totalUsers,
      lastMonthUsers,
    });
  } catch (error) {
    next(error);
  }
};

export const getSubscriber = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return next(errorHandler(404, "User not found!"));
    }
    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const getAlSubscribers = async (req, res, next) => {
  try {
    const user = await User.find();
    if (!user) {
      return next(errorHandler(404, "User not found!"));
    }
    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
