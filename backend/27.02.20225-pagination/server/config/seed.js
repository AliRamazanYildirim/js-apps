import { Product } from '../models/product.js';
import dbConnect from './db.js';


const seedDatabase = async () => {
    try {
        await dbConnect();
        console.log('Connected to MongoDB');

        await Product.deleteMany({});

        const color = ['red', 'green', 'blue', 'yellow', 'black', 'white'];
        const size = ['S', 'M', 'L', 'XL', 'XXL'];
        const brand = ['Nike', 'Adidas', 'Puma', 'Reebok', 'Under Armour'];
        const category = ['Shoes', 'Clothes', 'Accessories'];

        const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

        const productsToCreate = Array.from({ length: 100 }, (_, index) => ({
            name: `${brand} ${index + 1}`,
            price: Math.floor(Math.random() * 999) + 1,
            color: getRandomElement(color),
            size: getRandomElement(size),
            brand: getRandomElement(brand),
            category: getRandomElement(category),
        }));

        await Product.insertMany(productsToCreate);
        console.log('Products have been added to the database:', productsToCreate);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedDatabase();