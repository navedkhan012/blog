import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Db is connetred");
  } catch (error) {
    // console.log("Db is connetred");
    `Error: ${error.message}`;
    process.exit(1);
  }
};

export default connectDB;
