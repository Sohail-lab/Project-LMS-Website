import store from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
    const { user } = useSelector(store => store.auth);

    return (
        <>
            <h1 className="text-7xl">Dashboard</h1>
            <div className="flex md:h-screen bg-gray-100">
                <div className="flex-1 flex flex-col">
                    <main className="p-6 space-y-6">
                        <section className="bg-blue-500 text-white rounded-lg p-6">
                            <h1 className="text-2xl font-bold">Welcome back, {user.name}!</h1>
                            <button className="mt-4 bg-white text-blue-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100">
                                Browse new Projects
                            </button>
                        </section>

                        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {
                                [
                                    {label: 'Total Enrolled Projects', value: 1},
                                    {label: 'Completed Projects', value: 0},
                                    {label: 'Certifications', value: 0}
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-white shadow rounded-lg p-4 text-center">
                                        <h2 className="text-xl font-bold text-gray-700">{stat.value}</h2>
                                        <p className="text-gray-500">{stat.label}</p>
                                    </div>
                                ))
                            }
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-700 mb-4">Active Projects</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[...Array(1)].map((_, index) => (
                                <div key={index} className="bg-white shadow rounded-lg p-4 flex flex-col">
                                    <h3 className="text-lg font-bold text-gray-700 mb-2">Project {index+1}</h3>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-blue-500 h-2 rounded-full" style={{width:`${(index+1)*20}%`}}></div>
                                    </div>
                                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600">View Details</button>
                                </div>
                            ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-700 mb-4">Upcoming Deatlines</h2>
                            <ul className="spacy-y-4">
                                {[
                                    {title: 'Proj 1', due: 'June 19, 2025'}
                                ].map((deadline, index) => (
                                    <li key={index} className="bg-white shadow rounded-lg p-4 flex justify-between items-center">
                                        <span className="font-semibold text-gray-700">{deadline.title}</span>
                                        <span className="text-gray-500">Due: {deadline.due}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </main>
                </div>
            </div>
        </>
    );
};

export default Dashboard;