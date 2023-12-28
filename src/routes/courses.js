import express from "express";
import courseController from "../app/controllers/CourseController.js";
const courseRouter = express.Router();

courseRouter.get("/create", courseController.create);
courseRouter.post("/store", courseController.store);
courseRouter.get("/:slug", courseController.show);

export default courseRouter;
