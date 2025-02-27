import { Product } from "../models/product.js";

export const getAllProduct = async (req, res, next) => {
  const { page = 1, limit = 10, search = '' } = req.query;

  try {
    const query = search ? { name: { $regex: search, $options: 'i' } } : {};

    const products = await Product.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Product.countDocuments(query);
    const totalPages = Math.ceil(total / limit);

    res.json({
      products,
      totalPages,
    });
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};