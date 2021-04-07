const dotenv = require('dotenv');
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