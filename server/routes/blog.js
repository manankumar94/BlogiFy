import multer from "multer";
import express from "express";
import AuthController from "../controllers/authController.js";
import BlogController from "../controllers/blogController.js";
import CategoryController from "../controllers/categoryController.js";
import isAuthenticated from "../middlewares/authMiddleWare.js";

// configuration file for multer
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, `public/upload/`);
    },
    filename: function (req, file, cb){
        const newDate = new Date();
        const formattedDate = newDate.toLocaleDateString('en-GB').replace(/\//g, '-');
        cb(null, `${formattedDate}-${file.originalname}`);
    }
})
const upload = multer({storage: storage});


const router= express.Router();

// for authentication
router.post("/user/register", AuthController.userRegistration);
router.post("/user/login", AuthController.userLogin);

// protected Routes(authorization)

//for blogs
router.get("/get/allblogs",isAuthenticated, BlogController.getAllBlogs);
router.post("/add/blog",upload.single("thumbnail"),isAuthenticated, BlogController.addNewBlog);
router.get("/get/blog/:id",isAuthenticated, BlogController.getSingleBlog);

//for category
router.get("/get/allcategories",isAuthenticated, CategoryController.getAllCategories);
router.post("/add/category",isAuthenticated, CategoryController.addNewcategory);


export default router;