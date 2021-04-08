const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

const errorMiddleware = require('./middlewares/error');

//Using globle middlewares
app.use(express.json());
app.use(cookieParser());

//Import All Routes
const products = require('./routes/product');
const users = require('./routes/user');

//Mounting the routes.
app.use('/api/v1',products);
app.use('/api/v1',users);


//Middleware to handle error
app.use(errorMiddleware);

module.exports = app;