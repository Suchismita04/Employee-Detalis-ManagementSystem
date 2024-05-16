import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express()
import topicRoutes from './routes/iitjeeTopic.router.js';


// use  is used for configuration or middileware
app.use(cors({

    origin: process.env.CORS_ORIGIN,
    credentials: true
}
)
)
app.use(express.json({ limit: "16kb" })) 

app.use(express.urlencoded({ extended: true, limit: "16kb" })) 
app.use(express.static("public"))

app.use(cookieParser())

//import route


// routes decleration
app.use('/api/v1/iitjeeTopics', topicRoutes);


export { app }