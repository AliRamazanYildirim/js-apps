import Car from '../models/car.model.js';

// Get all cars
export const getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).json({
            status: 'success',
            results: cars.length,
            data: {
                cars
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Get a single car by ID
export const getCarById = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({
                status: 'fail',
                message: 'Car not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                car
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Create a new car
export const createCar = async (req, res) => {
    try {
        const newCar = await Car.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                car: newCar
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Update a car by ID
export const updateCar = async (req, res) => {
    try {
        const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!car) {
            return res.status(404).json({
                status: 'fail',
                message: 'Car not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                car
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Delete a car by ID
export const deleteCar = async (req, res) => {
    try {
        const car = await Car.findByIdAndDelete(req.params.id);
        if (!car) {
            return res.status(404).json({
                status: 'fail',
                message: 'Car not found'
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