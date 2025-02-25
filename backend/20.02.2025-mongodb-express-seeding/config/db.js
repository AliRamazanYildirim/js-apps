import mongoose from 'mongoose';

// Verbindung zur MongoDB herstellen
mongoose.connection.on('connected', () => {
  console.log('MongoDB verbunden');
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB Verbindungsfehler: ${err.message}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB Verbindung getrennt');
});

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, { dbName: process.env.MONGODB_DBNAME });
    console.log(`MongoDB verbunden: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Fehler: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;