import mongoose from "mongoose"

export const connectDB=async ()=>{
    return await mongoose.connect("mongodb://localhost:27017/portfolio").then(()=>console.log("db connect"))
};
