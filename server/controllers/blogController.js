import blogModel from "../models/blogModel.js";

class BlogController {
    static getAllBlogs = async (req, res) => {
        try {
            const fetchAllBlog = await blogModel.find({ user: req.user._id });
            return res.status(200).json(fetchAllBlog);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };

    static addNewBlog = async (req, res) => {
        const { title, category, description } = req.body;

        try {
            console.log("Title: " + title);
            console.log("Category: " + category); 
            console.log("Description: " + description);

            // Check if all required fields are present
            if (title && category && description) {
                const addBlog = new blogModel({
                    title: title,
                    category: category, 
                    description: description,
                    thumbnail: req.file.filename,
                    user: req.user._id,
                });

                const savedBlog = await addBlog.save(); // Await the save operation

                if (savedBlog) {
                    return res.status(200).json({ message: "Blog Added Successfully" });
                } else {
                    return res.status(400).json({ message: "Blog Not Added" });
                }
            } else {
                return res.status(400).json({ message: "All Fields Are Required" });
            }
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };

    static getSingleBlog = async (req, res) => {
        const { id } = req.params;

        try {
            if (id) {
                const fetchBlogById = await blogModel.findById(id);
                return res.status(200).json(fetchBlogById);
            } else {
                return res.status(400).json({ message: "Invalid URL id not provided" });
            }
        } catch (error) {
            return res.status(400).json({ message: "Unauthorized User" });
        }
    };
}

export default BlogController;
