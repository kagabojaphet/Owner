import COMMENT from "../model/comment";
import Product from "../model/product";
import errormessage from "../utils/errormessage";
import successmessage from "../utils/successmessage";

class commentcontroller{
    static async createcomment(req,res){
        const idproduct=req.params.idproduct
        req.body.user=req.user._id
        const comment=await COMMENT.create()
        const products=await Product.findByIdAndUpdate({_id:idproduct},{$push:{comment:comment}},{new:true})
        console.log(products)
    }
}