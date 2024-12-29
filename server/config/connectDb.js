import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

if(!process.env.MONGODB_URI){
    throw new Error(
        "please provide MONGO_DB URI in .env file"
    )
}
async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected db")
    }
    catch(error){

        console.log("mongodb connection error",error)
        process.exit(1)
    }
}

export default connectDB;