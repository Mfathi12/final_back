import express from "express";
import *as adminController from "./admin.controller.js";
const adminRouter = express.Router();
// Define your routes here

adminRouter.post("/signup",adminController.signup)
adminRouter.post("/login",adminController.login)
export default adminRouter;