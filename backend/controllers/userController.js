import { uploadPicture } from "../middleware/uploadPictureMiddleware.js";
import User from "../models/User.js";
import { fileRemover } from "../utils/fileRemover.js";

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

    if (!user) {
      throw new Error("Email not found");
    }
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

export const updateProfile = async (req, res, next) => {
  try {
    let user = await User.findById(req.user._id);
    if (!user) {
      throw new Error("user not found");
    }
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password && req.body.password.length < 6) {
      throw new Error("password length should be 6 digit");
    } else if (req.body.password) {
      user.password = req.body.password;
    }

    const updateUserProfile = await user.save();

    res.json({
      _id: updateUserProfile._id,
      avatar: updateUserProfile.avatar,
      name: updateUserProfile.name,
      email: updateUserProfile.email,
      verified: updateUserProfile.verified,
      admin: updateUserProfile.admin,
    });
  } catch (error) {
    next(error);
  }
};

export const updateProfilePicture = async (req, res, next) => {
  try {
    const upload = uploadPicture.single("profilePicture");

    upload(req, res, async function (err) {
      if (err) {
        const error = new Error("An unknow error occured when uploading");
        next(error);
      } else {
        if (req.file) {
          let filename;
          let updateUser = await User.findById(req.user._id);
          filename = updateUser.avatar;
          if (filename) {
            fileRemover(filename);
          }
          updateUser.avatar = req.file.filename;
          await updateUser.save();
          res.json({
            _id: updateUser._id,
            avatar: updateUser.avatar,
            name: updateUser.name,
            email: updateUser.email,
            verified: updateUser.verified,
            admin: updateUser.admin,
            token: await updateUser.generateJWT(),
          });
        } else {
          let filename;
          let updateUser = await User.findById(req.user._id);
          filename = updateUser.avatar;
          updateUser.avatar = "";
          await updateUser.save();
          fileRemover(filename);
          res.json({
            _id: updateUser._id,
            avatar: updateUser.avatar,
            name: updateUser.name,
            email: updateUser.email,
            verified: updateUser.verified,
            admin: updateUser.admin,
            token: await updateUser.generateJWT(),
          });
        }
      }
    });
  } catch (error) {
    next(error);
  }
};
