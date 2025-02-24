import { Router } from "express";
import { BlogPost } from "../models/blogPost.model.js";
import { createBlogPost, getAllBlogPosts } from "../controllers/blogController.js";

export const blogPostRouter = Router();

blogPostRouter.get("/", getAllBlogPosts)
.post("/", createBlogPost);
