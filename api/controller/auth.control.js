import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import {errorHandler} from '../utils/errorHandler.js'
import jwt from 'jsonwebtoken'


    export const signup =async (req,res,next) => {

        const {username,email,password} = req.body

        const hasedPassword =  bcryptjs.hashSync(password,10)

        const newUser = new User({username,email,password:hasedPassword})

        try {
            await newUser.save()

            res.status(201).json("user created successfully")
        } catch (error) {
            next(error)
        }
     
    }


    export const signIn = async (req,res,next) => {
        try {

            const {email,password} = req.body;

            const validUser = await User.findOne({email})
            
            if(!validUser) return next(errorHandler(404,'user not found'))

            const validPassword = await bcryptjs.compareSync(password,validUser.password)

            if(!validPassword) return next(errorHandler(401,'Invalid credentials'))
            
            const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET)

            const {password: pass, ...rest } = validUser._doc
            
            res.cookie('jwt-token',token,{httpOnly:true}).status(200).json(rest)
        } catch (error) {
          next(error)   
        }
    }