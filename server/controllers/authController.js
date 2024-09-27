import bcryptjs from "bcryptjs";
import authModel from "../models/authModel.js";
import jwt from "jsonwebtoken";


class AuthController{
    static userRegistration = async (req, res)=>{
        const {username,email, password}= req.body;
        try {
            if(username && email && password){
                const isUser= await authModel.findOne({email: email});
                if(! isUser){
                   // password hashing
                   const genSalt= await bcryptjs.genSalt(10);
                   const hashedPassword= await bcryptjs.hash(password, genSalt);

                   //save a user
                   const newUser= new authModel({
                    username: username,
                    email: email,
                    password: hashedPassword, // if you change hashedpassword with pssword no hashing is used
                   });
                   
                   const savedUser= await newUser.save();
                   if(savedUser){
                    return res
                            .status(200)
                            .json({message: "User Registration Successfull."});
                   } else{
                    return res
                            .status(400)
                            .json({message: "User Not Registered"});
                   }

                } else {
                    return res
                            .status(400)
                            .json({message: "User Already Exists."});
                }
            } else{
                return res
                        .status(400)
                        .json({message: "All Fields Are Required"});
            }
        } catch (error) {
            return res
                    .status(400)
                    .json({message: error.message});
        }
    };
    
    static userLogin= async (req, res)=>{
        const {email, password}= req.body;
        try {
            if(email && password){
                const isEmail= await authModel.findOne({email: email});
                if(isEmail){
                    if(isEmail.email=== email && await bcryptjs.compare(password, isEmail.password) ){
                        // token generate
                        const token= jwt.sign(
                            {userID: isEmail._id},   // through payload
                             "secretKey", 
                             {expiresIn: "2d"},
                            );
                        
                        return res
                                .status(200)
                                .json({
                                    userID: isEmail._id,
                                    name: isEmail.username,
                                    message: "Login Successfully",
                                    token,
                                });
                    } else{
                        return res
                                .status(400)
                                .json({message: "Wrong Credentials"});
                    }
                } else {
                    return res
                        .status(400)
                        .json({message: "User Not Registered"});
                }
            } else{
                return res
                        .status(400)
                        .json({message: "All Fields Are Required"});
            }
        } catch (error) {
            return res
                    .status(400)
                    .json({message: error.message});
        }
    };
}

export default AuthController;