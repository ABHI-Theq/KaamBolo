import { login,SignUp ,logout} from "../controllers/AuthFunc.js";

import express from 'express'

const router=express.Router();
router.post("/register",SignUp)
router.post('/login',login)
router.post('/logout',logout)

export default router