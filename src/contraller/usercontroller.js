import USER from "../model/user";
import errormessage from "../utils/errormessage";
import successmessage from "../utils/successmessage";
import bcrypt from 'bcrypt'

class usercontroller{
    static async createruser(req,res){
        const {firstname,lastname,username,email,password,confirmpassword,role}=req.body
            if(req.body.password!==req.body.confirmpassword){
                return errormessage(res,401,`password and confirmpassword not match`)
            } 
            //hash password
            const hashpassword= bcrypt.hashSync(req.body.password,10)
            const user=await USER.create({firstname,lastname,username,email,password:hashpassword})

            console.log(user)
        }
        // catch(error){
        //     return errormessage(res,500,`error ${error}`)
            
        // }


}
export default usercontroller