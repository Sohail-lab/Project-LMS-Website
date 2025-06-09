import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from "sonner";

const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        role: "student"
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value
        }))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try{
            const response = await axios.post('http://localhost:3000/api/v1/user/register', user, {
                headers: {
                    "Content-Type":"application/json"
                },
                withCredentials:true
            });
            
            if(response.data.success) {
                navigate('/login');
                toast.success(response.data.message);
            }
            else {
                toast.error("something went wrong");
            }
        }
        catch(error) {
            console.log(error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-4">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Create Your Account</h1>
                <p className="text-center text-gray-600 mb-8">Join us Today! It's quick and easy</p>
                {/* name input */}
                <div className="mb-4">
                    <Label>Full Name</Label>
                    <Input
                        placeholder="Enter your name"
                        name="name"
                        value={user.name}
                        type="text"
                        id="name"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <Label>Email Address</Label>
                    <Input
                        placeholder="Enter your email"
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <Label>Password</Label>
                    <Input
                        placeholder="Enter your password"
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <Label>Role</Label>
                    <RadioGroup className="flex gap-4 mt-2">
                        <div className="flex items-center space-x-2">
                            <Input
                                type="radio"
                                id="role1"
                                name="role"
                                value="student"
                                checked={user.role === 'student'}
                                onChange={handleChange}
                            />
                            <Label htmlFor="role1">Student</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Input
                                type="radio"
                                id="role2"
                                name="role"
                                value="admin"
                                checked={user.role === 'admin'}
                                onChange={handleChange}
                            />
                            <Label htmlFor="role2">Admin</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Input
                                type="radio"
                                id="role3"
                                name="role"
                                value="academic-team"
                                checked={user.role === 'academic-team'}
                                onChange={handleChange}
                            />
                            <Label htmlFor="role3">Academic Team</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Input
                                type="radio"
                                id="role4"
                                name="role"
                                value="evaluator"
                                checked={user.role === 'evaluator'}
                                onChange={handleChange}
                            />
                            <Label htmlFor="role4">Evaluator</Label>
                        </div>
                    </RadioGroup>
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600" onClick={handleSubmit}>Sign Up</Button>
                {/* divider */}
                <div className="flex items-center my-6">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-3 text-gray-500">OR</span>
                    <hr className="flex-grow border-gray-300" />
                </div>
                <p className="text-center mt-4">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Log In</Link></p>
            </div>
        </div>
    );
};

export default Signup;