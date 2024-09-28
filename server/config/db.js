import mongoose from "mongoose";
import dotenv from "dotenv"; 


dotenv.config();

const connectToMongo = async () => {
    try {
        const res = await mongoose.connect(process.env.DATABASE_URL);
        console.log("Connected Successfully to Database (Blog_App)");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
}

export default connectToMongo;
