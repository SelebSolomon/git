import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/jumia",{})
        console.log(`connected successfully to ${conn.connection.host}`)
    } catch (error) {
        console.log(`You have made an error that you cant handle: ${error}`)
    }
}

export default connectDB