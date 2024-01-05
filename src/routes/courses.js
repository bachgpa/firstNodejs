import express from "express";
import courseController from "../app/controllers/CourseController.js";
const courseRouter = express.Router();

courseRouter.get("/create", courseController.create);
courseRouter.post("/store", courseController.store);
courseRouter.get("/:id/edit", courseController.edit);
courseRouter.put("/:id", courseController.update);
courseRouter.patch("/soft-delete/:id", courseController.sofdel);
courseRouter.patch("/restore/:id", courseController.restore);
courseRouter.delete("/delete/:id", courseController.delete);
courseRouter.get("/:slug", courseController.show);

export default courseRouter;
