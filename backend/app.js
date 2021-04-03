const express = require('express');
const app = express();

const errorMiddleware = require('./middlewares/error');

app.use(express.json());

//Import All Routes
const products = require('./routes/product');

app.use('/api/v1',products);

//Middleware to handle error
app.use(errorMiddleware);

module.exports = app;