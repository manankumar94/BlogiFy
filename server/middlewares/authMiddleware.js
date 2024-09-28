// for valid users

import jwt from "jsonwebtoken";
import authModel from "../models/authModel.js";
import dotenv from "dotenv"; // Import dotenv

// Load environment variables
dotenv.config();

const isAuthenticated = async (req, res, next) => {
    let token;
    const { authorization } = req.headers;
    
    if (authorization && authorization.startsWith("Bearer")) {
        try {
            token = authorization.split(" ")[1];

            // Verify token using the secret key from .env
            const { userID } = jwt.verify(token, process.env.SECRET_KEY);

            // Get User from token
            req.user = await authModel.findById(userID).select("-password");

            if (!req.user) {
                return res.status(400).json({ message: "User Not Found" });
            }

            next();
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    } else {
        return res.status(400).json({ message: "Unauthorized User" });
    }
}

export default isAuthenticated;
