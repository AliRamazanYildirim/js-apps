import { Product } from "../models/product.js";


export const getAllProduct = async (req, res, next) => {
    const { page = 1, limit = 10 } = req.query;
  
    try {
      const products = await Product.find()
        .skip((page - 1) * limit)
        .limit(parseInt(limit));
  
      const total = await Product.countDocuments();
      const totalPages = Math.ceil(total / limit);
  
      res.json({
        products,
        totalPages,
      });
    } catch (error) {
      next(error);
    }
  }