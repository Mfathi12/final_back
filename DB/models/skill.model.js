import { Schema,model } from "mongoose";

const skillSchema=new Schema({
    title:{type:String},
    //subtitle:{type:String},
    description:{type:String},
    image:{type:String}
});

export const skillModel=model("skills",skillSchema);
