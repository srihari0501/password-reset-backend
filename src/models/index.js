import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

try {
    mongoose.connect('mongodb+srv://sriharisukumaran05:JzNGDFOJrmlGMgSc@cluster.dohljgn.mongodb.net/password-reset');
    console.log("moongoose Connected")
} catch (error) {
    console.log(error)
}

export default mongoose