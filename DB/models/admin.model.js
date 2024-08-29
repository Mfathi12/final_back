import { Schema,model } from "mongoose";

const adminSchema=new Schema({
    //name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
});

export const adminModel =model("Admin",adminSchema);