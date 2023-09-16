import exepress from "express"
import usercontroller from "../controller/usercontroller"


const router=exepress.Router()


router.post("/",usercontroller.createuser)
router.get("/",usercontroller.getalluser)
router.get("/:id",usercontroller.getoneuser)
router.delete("/:id",usercontroller.deleteoneuser)
router.delete("/",usercontroller.deletealluser)
router.patch("/:id",usercontroller.updateuser)
router.post("/login",usercontroller.loginuser)

export default router