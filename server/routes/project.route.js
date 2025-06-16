import express from "express";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { createProject, getCreatorProjects, getPublishedProjects } from "../controllers/project.controller.js";

const router = express.Router();

router.route("/").post(isAuthenticated, createProject);
router.route("/published-projects").get(getPublishedProjects);
router.route("/").get(isAuthenticated, getCreatorProjects);

export default router;