import {
  createComment,
  fetchComments,
  deleteComment,
  fetchAllComments,
} from "../controller/PostController.js";
import { Router } from "express";

const PostRouter = Router();

PostRouter.post("/", createComment);
PostRouter.get("/", fetchAllComments);
PostRouter.get("/:id", fetchComments);
PostRouter.delete("/:id", deleteComment);

export default PostRouter;
