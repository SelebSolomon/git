import mongoose from "mongoose"
import { type } from "os";
import { string } from "zod";

const Gender = ["Male", "Female"]

const userInfo = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        require: true
    },
    phoneNumber:{
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        enum: Gender,
        require: true
    }, 
    address: {
        type: String,
        require: true
    }



})

const user = mongoose.model("user", userInfo)

export default user;
