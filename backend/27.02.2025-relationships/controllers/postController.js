import { Post } from '../models/post.js';

export const createPost = async (req, res) => {
    try {
        const { owner, title, content } = req.body;
        const post = new Post({ owner, title, content });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('owner');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};