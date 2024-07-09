//require('dontenv').config()
import dotenv from 'dotenv'
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})


//2nd approach to connect with DB
connectDB();











/* first approach to connect with DB
import express from 'express';

const app = express();

(async ()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
       app.on("error",(error)=>{
        console.log("ERORR: ", error);
        throw error
       });

       app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on port ${process.env.PORT}`)
       })
    }
    catch(error){
        console.error("ERROR: ", error);
    }
})()

*/