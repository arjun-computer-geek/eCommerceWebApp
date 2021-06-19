const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const express = require('express');
const app = express();

const errorMiddleware = require('./middlewares/error');

//Using globle middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(fileUpload());

//Import All Routes
const products = require('./routes/product');
const users = require('./routes/user');
const order = require('./routes/order');

//Mounting the routes.
app.use('/api/v1',products);
app.use('/api/v1',users);
app.use('/api/v1',order);


//Middleware to handle error
app.use(errorMiddleware);

module.exports = app;