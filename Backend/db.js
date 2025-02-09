const mongoose = require('mongoose');

const connectToMongo = async () => {
    try {
        await mongoose.connect(' mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);  // Exit the process if connection fails
    }
};

module.exports = connectToMongo;
