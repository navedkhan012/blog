import express from "express";

import {
  createComment,
  deleteComment,
  updateComment,
} from "../controllers/commentController.js";

import { authGuard } from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/", authGuard, createComment);
router.put("/:commentId", authGuard, updateComment);
router.delete("/:commentId", authGuard, deleteComment);

export default router;
