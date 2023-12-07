import { Schema, model } from "mongoose";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";

const UserScema = new Schema(
  {
    avatar: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    varicicationCode: {
      type: String,
      required: false,
    },
    admin: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  { timestamps: true }
);

UserScema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await hash(this.password, 10);
    return next();
  }
});

UserScema.methods.generateJWT = async function () {
  return await jwt.sign(
    {
      id: this._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};

UserScema.methods.comparePassword = async function (enterPassword) {
  return compare(enterPassword, this.password);
};

const User = model("User", UserScema);

export default User;
