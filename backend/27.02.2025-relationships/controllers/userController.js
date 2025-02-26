import { User } from '../models/user.js';
import { Post } from '../models/post.js';

export const createUser = async (req, res, next) => {
  try {
    const { name } = req.body;
    const user = new User({ name });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().populate('posts');
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const query = User.findById(id).populate('posts');
    const user = await query.exec();
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ data: user });
  } catch (error) {
    next(error);
  }
};

export const addPostToUser = async (req, res, next) => {
  try {
    const { userId, title, content } = req.body;
    const post = new Post({ owner: userId, title, content });
    await post.save();

    const user = await User.findById(userId);
    user.posts.push(post._id);
    await user.save();

    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};