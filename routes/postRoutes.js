import express from "express";
import { createPost, deletePost, getFeedPost, getPost, likeUnlikePost, replyToPost } from "../controllers/postController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.get("/:id", getPost)
router.get("/feed/:id",protectRoute ,getFeedPost)
router.post("/create", protectRoute, createPost)
router.delete("/:id",protectRoute,deletePost)
router.post("/like/:id",protectRoute,likeUnlikePost)
router.post("/reply/:id",protectRoute,replyToPost)

export default router