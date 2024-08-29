import express from "express";
import *as skillController from "./skill.controller.js";
import { uploadFile } from "../../../multer.js";

const skillRouter = express.Router();
// Define your routes here

skillRouter.post(
    "/createSkill",
    uploadFile().single('skillImage'),
    skillController.createSkill
    
);

skillRouter.get("/getAllSkills",skillController.getAllSkills);
skillRouter.patch("/editSkill/:id",uploadFile().single('skillImage'),skillController.editSkill);
skillRouter.delete("/deleteSkill/:id",skillController.deleteSkill);

export default skillRouter;