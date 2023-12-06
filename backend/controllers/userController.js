import User from "../models/User.js";

export const registerUser = async (req, res, next) => {
  //   return res.status(200).json({ message: "Internal server error" });
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists in the database
    let _user = await User.findOne({ email });

    if (_user) {
      // User already exists
      // return res.status(400).json({ message: "User already exists" });
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
    // res.status(500).json({ message: "Internal server error" });
    next(error);
  }
};
