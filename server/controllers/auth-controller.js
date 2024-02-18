import { UserModel } from "../models/index.js";
import bcryptjs from "bcryptjs";
import customError from "./../utils/error.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/index.js";
const authController = {
  // Sign Up
  async signup(req, res, next) {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const user = new UserModel({ username, email, password: hashedPassword });
    try {
      await user.save();
      res.status(201).json({
        message: "Sign Up Successful",
      });
    } catch (error) {
      next(error);
    }
  },

  // Sign In
  async signin(req, res, next) {
    const { email, password } = req.body;
    try {
      const user = await UserModel.findOne({ email });
      if (!user) {
        return next(customError(404, "User not found"));
      }
      const match = bcryptjs.compareSync(password, user.password);
      if (!match) {
        return next(customError(401, "Invalid email or password"));
      }
      const token = jwt.sign({ id: user._id }, JWT_SECRET);
      const { password: hashedPassword, ...rest } = user._doc;
      const expireDate = new Date(Date.now() + 360000);
      res
        .cookie(
          "access_token",
          token,
          { httpOnly: true },
          { expires: expireDate }
        )
        .status(200)
        .json(rest);
    } catch (error) {
      next(error);
    }
  },
};

export default authController;
