import { Schema, model } from "mongoose";

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

const User = model("User", UserScema);

export default User;
