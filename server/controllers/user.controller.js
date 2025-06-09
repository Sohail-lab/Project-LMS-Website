import { User } from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import getDataUri from "../utils/dataUri.js";
import cloudinary from "../utils/cloudinary.js";

export const register = async (req, res) => {
    try {
        const {name, email, password, role} = req.body;
        if(!name || !email || !password || !role) {
            return res.status(400).json({
                success: false,
                message: "all fields are required"
            });
        }
        const user = await User.findOne({email});
        if(user) {
            return res.status(400).json({
                success: false,
                message: "user already exists with this email"
            });
        }
        // hint-> hashedPassword used for encryption
        // const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            name,
            email,
            // password:hashedPassword,
            password,
            role
        });
        return res.status(201).json({
            success: true,
            message: `Account Created Successfully with email: ${email} and password: ${password}`
        });
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to register"
        });
    }
};

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }
        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({
                success: false,
                message: "User doesn't exist"
            });
        }
        // const isPasswordMatch = await bcrypt.compare(password, user.password);
        const isPasswordMatch = user.password === password;
        if(!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: "Password incorrect"
            });
        }
        // generate token
        const token = jwt.sign({userId:user._id}, process.env.SECRET_KEY, {expiresIn: "1d"});
        return res.cookie('token', token, {httpOnly: true, sameSite:'strict', maxAge:1*24*60*60*1000}).json({
            message: `Welcome back ${user.name}`,
            success: true,
            user
        });
    }
    catch(error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed to login"
        });
    }
};

export const logout = async (_, res) => {
    try{
        return res.status(200).cookie('token', "", {maxAge:0}).json({
            success: true,
            message: "logged out successfully"
        });
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to log out"
        });
    }
};

export const updateProfile = async (req, res) => {
    try {
        const userId = req.id;
        const {name, description} = req.body;
        const file = req.file;

        if (!file) {
            return res.status(400).json({
                success: false,
                message: "Please provide a file to upload"
            });
        }

        const fileUri = getDataUri(file);
        let cloudResponse = await cloudinary.uploader.upload(fileUri);
        const user = await User.findById(userId).select("-password");

        if(!user) {
            return res.status(404).json({
                message:"User not found",
                success:false
            });
        }

        if(name) user.name = name;
        if(description) user.description = description;
        if(file) user.photoUrl = cloudResponse.secure_url;

        await user.save();
        return res.status(200).json({
            success:true,
            message:"Profile updated successfully",
            user
        });
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to update profile"
        });
    }
};