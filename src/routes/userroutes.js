import express  from "express";
import usercontroller from "../contraller/usercontroller";


const router=express.Router()

router.post("/",usercontroller.createruser)

export default router

