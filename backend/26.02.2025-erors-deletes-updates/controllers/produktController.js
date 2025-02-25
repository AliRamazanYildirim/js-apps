import { Product } from "../models/productModel.js";

export const createProduct = async (req, res, next) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json({data:newProduct});
    } catch (error) {
        next(error);
    }
}

export const getAllProducts = async (req, res, next) => {
    try {
        console.log(req.query);
        const filter = {};
        if(!req.query.includeDeleted){
            filter.deletedAt = null
        }
        console.log({filter});
        const products = await  Product.find(filter);
        res.status(200).json({data:products});
    } catch (error) {
        next(error);
    }
}

export const replaceProduct = async (req, res, next) => {
    try {
        const {id} = req.params;
        /* 
        const update = await Product.replaceOne({_id:id}, req.body); */
        const opt = {new:true}
        const update = await Product.findOneAndUpdate({_id:id}, req.body, opt)
        console.log({update});
        res.status(200).json({data: update});
    } catch (error) {
        next(error);
    }
}

export const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const opt = { new: true, upsert: true };
        const updated = await Product.findByIdAndUpdate(id, req.body, opt);
        res.status(200).json({ data: updated });
    } catch (error) {
        next(error);
    }
}

export const softDeleteProduct = async (req, res, next) => {
    try {
        const {id} = req.params;
        const opt = {new: true, runValidators:true};
        const result = await Product.findOneAndUpdate({_id:id}, {deletedAt:new Date()}, opt);
        res.status(200).json({data: result});
    } catch (error) {
        next(error)
    }
}

export const restoreProduct = async (req, res , next) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        if(!product.deletedAt){
            return res.status(404).json({message: 'Produkt wurde nicht gefunden'})
        }
        await product.restore();
        res.status(200).json({message: 'Produkt wurde widerhergestellt!'})
    } catch (error) {
        next(error)
    }
}