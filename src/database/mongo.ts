import { MongoClient, Db } from 'mongodb';

let client: MongoClient;
let db: Db;


export const connect = async (): Promise<void> => {
  const url = process.env.MONGODB_URL || 'mongodb://localhost:27017';
  const username = process.env.MONGODB_USERNAME;
  const password = process.env.MONGODB_PASSWORD;

  try {
    client = new MongoClient(url, {
      auth: { username, password },
    });

    await client.connect();
    db = client.db('test');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export const getDB = (): Db => {
  if (!db) {
    throw new Error('MongoDB not connected');
  }
  return db;
};

export const closeConnection = async (): Promise<void> => {
  if (client) {
    await client.close();
    console.log('MongoDB connection closed');
  }
};
export { MongoClient };

