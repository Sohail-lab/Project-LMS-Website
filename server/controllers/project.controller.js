import { ProjectModel } from "../models/project.model.js";

export const createProject = async(req, res) => {
    try {
        const {projectTitle, category} = req.body;
        if(!projectTitle || !category) {
            return res.status(400).json({
                message:"Project title and category is required",
                success:false
            });
        }
        const project = await ProjectModel.create({
            projectTitle,
            category,
            creator:req.id
        });
        return res.status(201).json({
            message:"Project created successfully",
            success:true,
            project
        });
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            message:"Failed to create project",
            success:false
        });
    }
};

export const getPublishedProjects = async(_, res) => {
    try {
        const projects = await ProjectModel.find({isPublished:true});
        if(!projects) {
            return res.status(404).json({
                message:"Project not found",
                success:false
            });
        }
        return res.status(200).json({
            success:true,
            projects,
            message:"Projects found"
        });
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            message:"Failed to get project",
            success:false
        });
    }
};

export const getCreatorProjects = async(req, res) => {
    try{
        const userId = req.id;
        const projects = ProjectModel.find({creator:userId})
        if(!projects) {
            return res.status(404).json({
                message:"Project not found",
                success:false,
                projects:[]
            });
        }
        return res.status(200).json({
            success:true,
            projects,
            message:"Found projects"
        });
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            message:"Failed to get project",
            success:false
        });
    }
};