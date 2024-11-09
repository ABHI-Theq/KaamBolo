import express from 'express'
import {getServiceProvider} from '../controllers/getServiceProviders.js'
const router=express.Router()

router.get('/:id',getServiceProvider)
export default router