import { Router } from "express";
import { BlogPost } from "../models/blogPost.model.js";

export const blogPostRouter = Router();

blogPostRouter.get("/", async (req, res) => {
  try {
    const posts = await BlogPost.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}).post("/", async (req, res) => {
    try {
        const post = await BlogPost.create(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
