import { Schema, model } from "mongoose";

const PostCategoriresSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const PostCategorires = model("PostCategorires", PostCategoriresSchema);

export default PostCategorires;
