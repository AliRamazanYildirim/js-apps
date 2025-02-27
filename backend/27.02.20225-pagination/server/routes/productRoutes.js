import { Router } from "express";
import { getAllProduct } from "../controllers/productController.js";

export const productRouter = Router();

productRouter.get('/products', getAllProduct);