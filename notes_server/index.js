//importing packges and middlewares;
require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');

//creating app
const app = express();

//adding middlewares
app.use(express(express.json));
app.use(morgan("common"));
app.use(helmet());


//mongoDB connection
const DB_Url = process.env.MONGODB_URL;
mongoose
  .connect(DB_Url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongo db database connected");
  })
  .catch((error) => {
    console.log(error);
  });



//listing app on port 8000
app.listen(8000,()=>{
    console.log('server is running on localhost:8000')
})