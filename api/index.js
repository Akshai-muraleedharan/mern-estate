import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'


const app = express()
dotenv.config()

app.use(express.json())

const port = process.env.PORT || 4005


   mongoose.connect(process.env.MONGODB).then(()=>{
    console.log('monogdb connected successfully')
   }).catch((err)=>{
    console.log(err)
   })



 

   app.use('/api/user',userRouter)
   app.use('/api/auth',authRouter)

  

   app.use((err,req,res,next)=> {
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error"

    return res.status(statusCode).json({
      success:false,
      statusCode,
      message 
    })
 })

app.listen(port,() => {
    console.log(`server connected on port ${port}`)
})