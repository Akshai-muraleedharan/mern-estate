import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRouter from './routes/user.route.js'

const app = express()
dotenv.config()

const port = process.env.PORT || 4005


   mongoose.connect(process.env.MONGODB).then(()=>{
    console.log('monogdb connected successfully')
   }).catch((err)=>{
    console.log(err)
   })
 

   app.use('/api/user',userRouter)

app.listen(port,() => {
    console.log(`server connected on port ${port}`)
})