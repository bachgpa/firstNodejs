import express from "express";
import meController from "../app/controllers/MeController.js";
const meRouter = express.Router();

meRouter.get("/stored-courses", meController.storedCourses);
meRouter.get("/deleted-courses", meController.softDeletedCourses);
// meRouter.get("/", meController.storedCourses);

export default meRouter;
