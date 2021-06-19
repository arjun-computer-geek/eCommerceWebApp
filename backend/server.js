const dotenv = require('dotenv');
const cloudinary = require('cloudinary');
const connectDatabase = require('./config/database');

const app = require('./app');

//Handle Uncaught Exception
process.on('uncaughtException', err => {
    console.log(`Error: ${err.stack}`);
    console.log('shutting down due to uncaught exception');
    process.exit(1);
});


//Setting up Config File
dotenv.config({path: './backend/config/config.env'});


//Connecting To Database
connectDatabase();

//Setting up cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

//Listning on Server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on Port : ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});
//Handle unhandled promise Rejection
process.on('unhandledRejection', err =>{
    console.log(`ERROR: ${err.message}`);
    console.log('shutting down the server due to unhandled promise rejection');
    server.close(() =>{
        process.exit(1);
    })
}) 