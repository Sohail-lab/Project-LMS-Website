import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/authSlice";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [inputUser, setInputUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputUser((prev) => ({
            ...prev,
            [name]: value
        }))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputUser);
        try{
            const response = await axios.post('http://localhost:3000/api/v1/user/login', inputUser, {
                headers: {
                    "Content-Type":"application/json"
                },
                withCredentials:true
            });
            
            if(response.data.success) {
                navigate('/');
                dispatch(setUser(response.data.user));
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
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Welcome Back</h1>
                <p className="text-center text-gray-600 mb-8">Please login to your account</p>
                {/* name input */}
                <div className="mb-4">
                    <Label>Email Address</Label>
                    <Input placeholder="Enter your email"
                        name="email"
                        type="email"
                        value={inputUser.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <Label>Password</Label>
                    <Input placeholder="Enter your password"
                        type="password"
                        name="password"
                        value={inputUser.password}
                        onChange={handleChange}
                    />
                </div>
                {/* <div className="mb-4">
                    <Label>Role</Label>
                    <RadioGroup defaultValue="option-one" className="flex gap-4 mt-2">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-one" id="option-one" />
                            <Label htmlFor="option-one">Student</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-two" id="option-one" />
                            <Label htmlFor="option-one">Admin</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-three" id="option-one" />
                            <Label htmlFor="option-one">Academic Team</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-four" id="option-one" />
                            <Label htmlFor="option-one">Evaluator</Label>
                        </div>
                    </RadioGroup>
                </div> */}
                <Button className="w-full bg-blue-500 hover:bg-blue-600" onClick={handleSubmit}>Login</Button>
                {/* divider */}
                <div className="flex items-center my-6">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-3 text-gray-500">OR</span>
                    <hr className="flex-grow border-gray-300" />
                </div>
                <p className="text-center mt-4">Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;