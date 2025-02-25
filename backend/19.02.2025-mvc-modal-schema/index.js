import express from "express";
import "dotenv/config";
import db from "./libs/mongodb.js";
import User from "./models/user.model.js";
import Admin from "./models/admin.model.js";

const app = express();
const port = process.env.PORT || 3000;

// Hauptfunktion für asynchrone Operationen
const startServer = async () => {
  try {
    // Erst Datenbankverbindung herstellen
    await db();
    
    // Dann User erstellen
    const newUser = await User.create({
      username: "John Doe",
      email: "ali@test.com",
      password:"123456",
      accountNumber: 123456,
      description: "This is a test user",
      isVerified: true,
    });
    console.log(newUser);

    // Admin erstellen
     const newAdmin = await Admin.create({
      username: "John Doe",
      email: "ali@test.com",
      password:"123456",
      accountNumber: 123456,
      description: "This is a test user",
      isVerified: true,
    });

    await newAdmin.save();

    // Server starten
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

// Server starten
startServer();