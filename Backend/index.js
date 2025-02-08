const connectToMongo = require('./db');
const express = require('express');

connectToMongo(); // Ensure this is called before starting the server

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
