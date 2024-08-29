import express from "express";
import *as projectController from "./project.controller.js";
import { uploadFile } from "../../../multer.js";

const projectRouter = express.Router();
// Define your routes here

projectRouter.post(
    "/createProject",
    uploadFile().single('projectImg'),
    projectController.createProject
    
);

projectRouter.get("/getAllProjects",projectController.getProjects);
projectRouter.patch("/editProject/:id", uploadFile().single('projectImg'),projectController.editProject);
projectRouter.delete("/deleteProject/:id",projectController.deleteProject);

export default projectRouter;