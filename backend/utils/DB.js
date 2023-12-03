import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://devdizz143:aNKNzKB5arcxVmMg@cluster0.kywv3ba.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Db is connetred");
  } catch (error) {
    // console.log("Db is connetred");
    `Error: ${error.message}`;
    process.exit(1);
  }
};

export default connectDB;
