import mongoose from 'mongoose';
import { faker } from '@faker-js/faker';
import connectDB from './db.js';
import Car from '../models/car.model.js';

const generateRandomCar = () => ({
  model: faker.vehicle.model(),
  type: faker.vehicle.type(),
  fuel: faker.vehicle.fuel(),
  color: faker.color.human(),
  buildYear: faker.date.past(20, new Date()).getFullYear(),
  mileage: faker.number.int({ min: 0, max: 200000 }),
  hp: faker.number.int({ min: 50, max: 500 }),
  vin: faker.vehicle.vin()
});

const generateCars = (amount) => Array.from({ length: amount }, generateRandomCar);

const seedDatabase = async (amount) => {
  try {
    await connectDB();
    await Car.deleteMany({});
    const seedCars = generateCars(amount);
    await Car.insertMany(seedCars);
    console.log('Datenbank erfolgreich mit Seed-Daten gefüllt');
    mongoose.connection.close();
  } catch (error) {
    console.error('Fehler beim Seeding der Datenbank:', error);
    process.exit(1);
  }
};

// Hole dir das Befehlszeilenargument
const amount = parseInt(process.argv[2], 10) || 10; // Standardmäßig 10

seedDatabase(amount);