import express from "express";
import {
  createPost,
  deletePost,
  getAllPost,
  getPost,
  updatePost,
} from "../controllers/postController.js";
import { authGuard, adminGuard } from "../middleware/authmiddleware.js";
const router = express.Router();

router.get("/", getAllPost);
router.post("/", authGuard, adminGuard, createPost);
router.get("/:slug", getPost);
router.put("/:slug", authGuard, adminGuard, updatePost);
router.delete("/:slug", authGuard, adminGuard, deletePost);

export default router;
