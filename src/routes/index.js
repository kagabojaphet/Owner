import  express from "express";
import userroutes from "./userroutes"
import productroutes from "./productroutes"

const router=express.Router()

router.use("/user",userroutes)
router.use("/product",productroutes)

export default router