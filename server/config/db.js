import mongoose from "mongoose";

const connectToMongo= async () => {
    const res= await mongoose.connect("mongodb://localhost:27017/Blog_App");
    if(res){
        console.log("Connected Successfully to Database (Blog_App)");
    }
}

export default connectToMongo;