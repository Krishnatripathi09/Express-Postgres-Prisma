import {
  createPost,
  fetchPosts,
  deletePost,
  fetchAllPosts,
} from "../controller/PostController.js";
import { Router } from "express";

const PostRouter = Router();

PostRouter.post("/", createPost);
PostRouter.get("/", fetchAllPosts);
PostRouter.get("/:id", fetchPosts);
PostRouter.delete("/:id", deletePost);

export default PostRouter;
