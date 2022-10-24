import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';
import postRoutes from "./Routes/posts.js"

const app = express(); //very first thing you have to do


app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));

app.use(cors());

app.use('/posts', postRoutes); // we added the middleware, 
/*
 Now the application will start from somthing with url below
 http://localhost:5000/posts/
*/


//mongodb is gonna use for the database..............
const CONNECTION_URL = "mongodb+srv://admin:admin@cluster0.x47d58r.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, ()=> {
    console.log(`server running in ${PORT}`);
  }))
  .catch((error) => {
    console.log(error); 
  })
