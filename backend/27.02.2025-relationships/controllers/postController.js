import { Post } from '../models/post.js';

export const createPost = async (req, res, next) => {
    try {
        const { owner, title, content } = req.body;
        const post = new Post({ owner, title, content });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        next(error);
    }
};

export const getPosts = async (req, res, next) => {
    try {
        const posts = await Post.find().populate('owner');
        res.status(200).json(posts);
    } catch (error) {
        next(error);
    }
};

export const getPostById = async (req, res, next) => {
    try {
        const { id } = req.params;
        let post;
        if(req.query.populate === 'owner') {
            post = await Post.findById(id).populate('owner');
        } else {
            post = await Post.findById(id);
        }
        res.status(200).json({data:post});
    } catch (error) {
        next(error);
    }
};

export const addCommentToPost = async (req, res, next) => {
    try {
        const { postId } = req.params;
        const { comment } = req.body;

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        post.comments.push(comment);
        await post.save();

        res.status(201).json(post);
    } catch (error) {
        next(error);
    }
};