import ProjectCard from "@/components/projectCard";
import React from "react";

export const projectsJson = [
    {
        "id": 1,
        "title": "Something",
        "description": "Something as well",
        "image": "https://github.com/shadcn.png"
    },
    {
        "id": 2,
        "title": "Something",
        "description": "Something as well",
        "image": "https://github.com/shadcn.png"
    },
    {
        "id": 3,
        "title": "Something",
        "description": "Something as well",
        "image": "https://github.com/shadcn.png"
    },
];

const Projects = () => {
    return(
        <div className="bg-gray-100 pt-14">
            <div className="min-h-screen max-w-7xl mx-auto py-10">
                <div className="px-4">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Projects</h1>
                    <p className="text-center text-gray-600 mb-12">Explore our curated projects to boost your skills and career. Whether you're a beginner or an expert, we have something for everyone.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            projectsJson?.map((project) => {
                               return <ProjectCard project={project} />;
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;