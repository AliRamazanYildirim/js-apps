import { Router } from 'express';
import * as car  from '../controllers/car.controller.js';

const router = Router();

// Get all cars
router.get('/', car.getAllCars);

// Get car by ID
router.get('/:id', car.getCarById);

// Create a new car
router.post('/', car.createCar);

// Update a car by ID
router.put('/:id', car.updateCar);

// Delete a car by ID
router.delete('/:id', car.deleteCar);

export default router;
