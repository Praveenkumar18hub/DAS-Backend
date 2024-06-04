import mongoose from "mongoose";
import {config} from "dotenv";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI ,{
        dbName : "DOCTOR_APPOINTMENT_SYSTEM",
    }).then(() => {
        console.log("Database connected");
    }).catch(err => {
        console.log("Some Error Occured",err);
    });
}