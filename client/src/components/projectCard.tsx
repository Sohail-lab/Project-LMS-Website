import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const ProjectCard = ({project}) => {
    return(
        <Card className="bg-white shadow-lg">
            <img src={project.image} alt="" className="w-full h-48 object-cover" />
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button>Enroll</Button>
            </div>
        </Card>
    );
}

export default ProjectCard;