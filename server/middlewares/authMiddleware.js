// for valid Users

import jwt from "jsonwebtoken";
import authModel from "../models/authModel.js";

const isAuthenticated= async (req, res, next)=>{
    let token;
    const {authorization} = req.headers;
    if(authorization && authorization.startsWith("Bearer")){
        try {
            token= authorization.split(" ")[1];

            //verify token
            const {userID}= jwt.verify(token, "secretKey");

            // get User from token
            req.user= await authModel.findById(userID).select("-password");

            if(!req.user){
                return res
                    .status(400)
                    .json({message: "User Not Found"});
            }

            next();
        } catch (error) {
            return res
                .status(400)
                .json({message: error.message});
        }
    } else {
        return res
        .status(400)
        .json({message: "UnAuthorized User"});
    }
}

export default isAuthenticated;