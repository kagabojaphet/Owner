import { string } from "i/lib/util";
import mongoose from "mongoose";

const userschame=new mongoose.Schema({
    firstname:{
        type:String,
        required:true

    },
    lastname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confrimpassword:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    },
    createdate:{
        type:Date,
        default:Date.now()
    }
})
const USER=mongoose.model("USER",userschame)
export default USER