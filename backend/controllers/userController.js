import User from "../models/User.js";

export const registerUser = async (req, res, next) => {
  //   return res.status(200).json({ message: "Internal server error" });
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists in the database
    let _user = await User.findOne({ email });

    if (_user) {
      // User already exists this error come from middlerware
      throw new Error("User already exists");
    }

    // Continue with user registration
    _user = await User.create({
      name,
      email,
      password,
    });

    return res.status(201).json({
      _id: _user._id,
      avatar: _user.avatar,
      name: _user.name,
      email: _user.email,
      verified: _user.verified,
      admin: _user.admin,
      token: await _user.generateJWT(),
    });
  } catch (error) {
    // Handle error
    console.error(error);
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    // console.log("user", user);
    if (!user) {
      throw new Error("Email not found");
    }
    // console.log("password", password);
    // console.log("comparePassword", await user.comparePassword(password));
    if (await user.comparePassword(password)) {
      return res.status(201).json({
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        verified: user.verified,
        admin: user.admin,
        token: await user.generateJWT(),
      });
    } else {
      throw new Error("invalid email or password");
    }
  } catch (error) {
    next(error);
  }
};

export const userProfile = async (req, res, next) => {
  try {
    let user = await User.findById(req.user._id);
    if (user) {
      return res.status(201).json({
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        verified: user.verified,
        admin: user.admin,
      });
    } else {
      let error = new Error("user not found");

      error.statusCode = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
};
