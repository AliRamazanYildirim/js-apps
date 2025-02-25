import { Zoo } from "../models/zoo.model.js";

// Get all zoos
export const getAllZoos = async (req, res) => {
    try {
        const zoos = await Zoo.find();
        res.status(200).json({
            status: 'success',
            results: zoos.length,
            data: {
                zoos
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Get a single zoo by ID
export const getZooById = async (req, res) => {
    try {
        const zoo = await Zoo.findById(req.params.id);
        if (!zoo) {
            return res.status(404).json({
                status: 'fail',
                message: 'Zoo not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                zoo
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Create a new zoo
export const createZoo = async (req, res) => {
    try {
        const newZoo = await Zoo.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                zoo: newZoo
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Update a zoo by ID
export const updateZoo = async (req, res) => {
    try {
        const zoo = await Zoo.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!zoo) {
            return res.status(404).json({
                status: 'fail',
                message: 'Zoo not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                zoo
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Delete a zoo by ID
export const deleteZoo = async (req, res) => {
    try {
        const zoo = await Zoo.findByIdAndDelete(req.params.id);
        if (!zoo) {
            return res.status(404).json({
                status: 'fail',
                message: 'Zoo not found'
            });
        }
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};