import mongoose from "mongoose";
import { ServerApiVersion } from "mongodb";

// Event Listener für die Mongoose Connection
mongoose.connection.on("error", (error) => {
  console.log("Error connecting to the database", error);
});

const db = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URL || "mongodb://localhost:27017",
      {
        serverApi: ServerApiVersion.v1,
      }
    );
    console.log("Connected to the database");
  } catch (error) {
    console.log("Error connecting to the database", error);
    process.exit(1);
  }
};

export default db;