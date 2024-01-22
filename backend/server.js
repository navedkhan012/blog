import express from "express";
import path from "path";
import dotenv from "dotenv";
import connectDB from "./utils/DB.js";
import { errorHandler, invalidPathHandler } from "./middleware/errorHandler.js";
import cors from "cors";

const __dirname = path.resolve();

// Routes
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is running...");
});
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

// static asssets
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(invalidPathHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on post ${PORT}`));
