import config from "./../config";
import User from "./../models/User";
import jwt from  "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];

        if (!token) return res.status(403).json({message:"no token provided"})

        const decode = jwt.verify(token, config.SECRET);
        req.userId = decode.indexOf
        const user = await User.findById(req.userId, {password: 0})

        if(!user) return res.status(404).json({message:"user not found"})

        next();
    } catch (error) {
        return res.status(401).json({message:"Unauthorized"})
    }
};

export const isModerator = async (req, res, next) => {}
export const isAdmin = async (req, res, next) => {}
