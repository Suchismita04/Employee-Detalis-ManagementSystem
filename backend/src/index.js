// this file is used to create a db connection 
//require('dotenv').config({path:'/.env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";
import { DB_Name } from "./constants.js";

dotenv.config({
    path:'/.env'
})
//when async is execute then it return a promise so, thats why we use  then and catch
connectDB().then(
    ()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`sever is running at port :${process.env.PORT}`)
        
    })
    }
).catch((err)=>{
    console.log("Mongo db connection failed!!!",err)
   
})
