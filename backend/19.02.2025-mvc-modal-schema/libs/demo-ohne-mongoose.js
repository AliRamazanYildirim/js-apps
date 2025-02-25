import {MongoClient, ServerApiVersion} from 'mongodb';

const databaseUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017';

try {
    const client = await MongoClient.connect(databaseUrl, {
        serverApi: ServerApiVersion.v1
    });
    console.log('Connected to the database');
    const db = client.db('test');
    
    // Korrektur: Erst Collection auswählen, dann insertOne
    await db.collection('users').insertOne({name: 'Ali', age: 25}); // Collection auswählen und insertOne in einer Zeile
    
    console.log('Document inserted successfully');
    await client.close(); // Connection schließen nicht vergessen
} catch (error) {
    console.log('Error connecting to the database', error);
}