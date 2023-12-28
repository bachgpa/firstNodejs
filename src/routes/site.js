import express from "express";
const siteRouter = express.Router();

import siteController from "../app/controllers/SiteController.js";

siteRouter.get("/search", siteController.search);
siteRouter.get("/", siteController.home);

export default siteRouter;
