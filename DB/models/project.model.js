import { Schema,model } from "mongoose";

const projectSchema=new Schema({
    title:{type:String},
    //subtitle:{type:String},
    description:{type:String},
    image:{type:String}

});

export const projectModel=model("project",projectSchema);
