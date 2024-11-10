

import express from 'express';
import dotenv from 'dotenv';
import cookieparser from 'cookie-parser'
import connectDB from './connectDB.js';
import userRoute from './route/userRoute.js'
import serviceRoute from './route/serviceRoute.js'
import cors from 'cors'
import {app,io,server} from './socket/socket.js'
// const app=express();
dotenv.config();
 connectDB()
const port=process.env.PORT;
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(express.json())
app.use(cookieparser())
app.use(express.urlencoded({extended:true}))
app.use('/api/auth',userRoute);
app.use('/api/service', serviceRoute);
app.get('/',(req,res)=>{
    res.send("hey");
    
})
server.listen(port,
    console.log("server is running at",port)
)