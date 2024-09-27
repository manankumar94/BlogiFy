import categoryModel from "../models/categoryModel.js";

class CategoryController{
    static  getAllCategories = async (req, res)=>{
       try {
            const fetchAllCategories= await categoryModel.find({}); // finding all the categories
            return res
                .status(200)
                .json(fetchAllCategories);
       } catch (error) {
        return res
            .status(400)
            .json({message: error.message});
       }
    }
    static addNewcategory= async (req, res)=>{
        const {title}= req.body;
        try {
            if(title){
                const newcategory= new categoryModel({
                    title,
                })

                const savedCategory= await newcategory.save();
                if(savedCategory){
                    return res
                        .status(200)
                        .json({
                            CategoryId:savedCategory._id,
                            message: "Category Added Successfully"});
                } else{
                    return res
                    .status(400)
                    .json({message: "Category Not Saved"});
                }
            } else{
                return res
                    .status(400)
                    .json({message: "Title is Required"});
            }
        } catch (error) {
            return res
                .status(400)
                .json({message: error.message});
        }
    }
}

export default CategoryController;