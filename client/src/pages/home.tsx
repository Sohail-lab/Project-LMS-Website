import Hero from "@/components/hero";
import React from "react";
import { projectsJson } from '@/pages/projects';
import ProjectCard from "@/components/projectCard";

const Home = () => {
    return (
        <div>
            <Hero />
            <div className="py-10">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Projects</h1>
                <p className="text-center text-gray-600 mb-12">Explore our curated projects to boost your skills and career. Whether you're a beginner or an expert, we have something for everyone.</p>
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        projectsJson.slice(0, 7).map((project) => {
                            return <ProjectCard project={project} />;
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;