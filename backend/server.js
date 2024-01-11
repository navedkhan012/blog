import express from "express";
import path from "path";
import dotenv from "dotenv";
import connectDB from "./utils/DB.js";
import { errorHandler, invalidPathHandler } from "./middleware/errorHandler.js";

const __dirname = path.resolve();

// Routes
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is running...");
});

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// static asssets
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(invalidPathHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on post ${PORT}`));
