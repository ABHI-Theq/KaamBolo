import express from 'express';
import dotenv from 'dotenv';
import cookieparser from 'cookie-parser'
import connectDB from './connectDB.js';
import userRoute from './route/userRoute.js'
import serviceRoute from './route/serviceRoute.js'
const app=express();
app.use(express.json())
dotenv.config();
 connectDB()
const port=process.env.PORT;
app.use(cookieparser())
app.use(express.urlencoded({extended:true}))
app.use('/api/auth',userRoute);
app.use('/api/service',serviceRoute);
app.get('/',(req,res)=>{
    res.send("hey");
    
})
app.listen(port,
    console.log("server is running at",port)
)