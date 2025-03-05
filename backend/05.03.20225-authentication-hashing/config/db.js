import mongoose from 'mongoose';


mongoose.connection.on('error', (error) => {
    console.log('DB Fehler nach initialer Verbindung:', error);
})

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName:process.env.DATABASE_NAME
        })
        console.log('Connected to MongoDB!');
    } catch (error) {
        console.error('Connection error:', error);
    }

}

export default dbConnect