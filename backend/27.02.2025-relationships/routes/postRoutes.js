import { Router } from "express";
import { createPost, getPosts, addCommentToPost, getPostById } from "../controllers/postController.js";

const postRouter = Router();

postRouter
  .get("/posts", getPosts)
  .get('/posts/:id', getPostById)
  .post("/posts", createPost)
  .post("/posts/:postId/comments", addCommentToPost);

export default postRouter;