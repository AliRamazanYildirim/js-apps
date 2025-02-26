import { User } from '../models/user.js';
import { Post } from '../models/post.js';

export const createUser = async (req, res) => {
  try {
    const { name } = req.body;
    const user = new User({ name });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().populate('posts');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addPostToUser = async (req, res) => {
  try {
    const { userId, title, content } = req.body;
    const post = new Post({ owner: userId, title, content });
    await post.save();

    const user = await User.findById(userId);
    user.posts.push(post._id);
    await user.save();

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};