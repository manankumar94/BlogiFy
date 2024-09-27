import mongoose, { mongo } from "mongoose";

const blogSchema= new mongoose.Schema({
    title:{
        type: String,
    },
    category :{
        id: {
            type: mongoose.Schema.Types.ObjectId,
        refer: "categories",  // for one to one relation with categories
        },
        name: {
            type: String,
        }
    },
    description: {
        type: String,
    },
    thumbnail: {
        type: String,
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        refer: "users",
    }
})

const blogModel= mongoose.model("blogs", blogSchema);

export default blogModel;