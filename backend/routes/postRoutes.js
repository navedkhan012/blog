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
router.get("/:slug", getPost);
router.post("/", authGuard, adminGuard, createPost);
router.put("/:slug", authGuard, adminGuard, updatePost);
router.delete("/:slug", authGuard, adminGuard, deletePost);

export default router;
