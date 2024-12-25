import express from 'express'
import { test } from '../controller/users.control.js'



const router = express.Router()

router.get('/test',test)


export default router