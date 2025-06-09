import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    role: {
        type: String,
        enum: ["student", "admin", "academic-team", "evaluator"],
        required: true
    },
    photoUrl: {
        type: String,
        default:""
    },
    enrolledProjects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project'
        },
    ]
}, {timestamps: true});

export const User = mongoose.model('User', userSchema);