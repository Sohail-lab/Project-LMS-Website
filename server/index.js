import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoute from './routes/user.route.js'
import projectRoute from './routes/project.route.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';


dotenv.config();

const app = express();

const PORT =  3000;

// default middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

// apis
app.use("/api/v1/user", userRoute);
app.use("/api/v1/project", projectRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server listening at port ${PORT}`);
});