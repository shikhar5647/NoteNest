const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

const connectToMongo = async () => {
  try {
    const client = new MongoClient('mongodb://0.0.0.0:27017/notenest');
    await client.connect();
    const db = client.db('notenest');
    console.log('✅ Connected to MongoDB successfully');
    return null;
  } 
  catch (error) {
    console.error('❌ Error connecting to MongoDB:', error);
    return null;
  }
};

module.exports = connectToMongo;