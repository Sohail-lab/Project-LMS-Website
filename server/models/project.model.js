import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    projectTitle:{
        type:String,
        required:true
    },
    subTitle:{
        type:String
    },
    description:{
        type:String
    },
    category:{
        type:String,
        required:true
    },
    projectLevel:{
        type:String,
        enum:['Beginner', 'Intermediate', 'Advanced']
    },
    projectThumbnail:{
        type:String
    },
    enrolledStudents:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    isPublished:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

export const ProjectModel = mongoose.model("ProjectModel", projectSchema);