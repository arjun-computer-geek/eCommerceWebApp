const dotenv = require('dotenv');

const app = require('./app');
const connectDatabase = require('./config/database');


//Setting up Config File
dotenv.config({path: 'backend/config/config.env'});

//Connecting To Database
connectDatabase();

//Listning on Server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on Port : ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});