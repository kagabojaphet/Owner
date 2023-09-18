import mongoose, { mongo } from "mongoose";

const productschema=new mongoose.Schema({
    productimage:{
        type:String,
        required:true
    },
    productname:{
        type:String,
        required:true,
    },
    productinfo:{
        type:String,
        required:true
    },
    producttype:{
        type:String,
        required:true
    },
    productcost:{
        type:String,
        required:true
    },
  
    pastdate:{
        type:Date,
        default:Date.now()
    },
    Comment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"COMMENT"
    }
})
productschema.pre(/^find/,function(next){
    this.populate({
        path:"comment",
        select:"creaddate"
    })
    next()
})

const Product=mongoose.model("Product",productschema)
export default Product