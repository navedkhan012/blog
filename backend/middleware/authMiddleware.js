import jwt from "jsonwebtoken";
import User from "../models/User.js";
export const authGuard = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const { id } = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(id).select("-password");
      next();
    } catch (error) {
      let err = new Error("authGuard authorized token failed");
      err.stausCode = 401;
      next(err);
    }
  } else {
    let error = new Error("Not authrozxtion, no token");
    error.stausCode = 401;
    next(error);
  }
};

export const adminGuard = async (req, res, next) => {
  if (req.user && req.user.admin) {
    next();
  } else {
    let error = new Error("adminGuard authorized as admin");
    error.statusCode = 401;
    next(error);
  }
};
