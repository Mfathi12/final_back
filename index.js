import express from "express";
import { connectDB } from "./DB/connection.js";
import adminRouter from "./src/modules/admin/admin.router.js";
import projectRouter from "./src/modules/portfolio/project.router.js";
import skillRouter from "./src/modules/portfolio/skill.router.js";
import contactRouter from "./src/modules/portfolio/contact.router.js"; 
import cors from "cors";

const app=express();
const port =3000;
app.use(cors());
app.use(express.json());
await connectDB();

app.use("/Admin",adminRouter)
app.use("/Project",projectRouter)
app.use("/Skill",skillRouter)
app.use("/Contact", contactRouter);


app.listen(port, () => console.log('app listen on port  ${port}'));