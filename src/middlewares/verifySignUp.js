import User from "../models/User";
import {ROLES} from "./../models/Role";

export const checkDuplicateUsernameOrEmail = async(req, res, next) => {
    const { username, email } = req.body

    const user = await User.findOne({ username })
    const emailExists = await User.findOne({ email })

    if (user) return res.status(400).json({message: "The user already exists"})
    if (emailExists) return res.status(400).json({message: "The email already exists"})

    next()
}

export const checkRoleExisted = (req, res, next) => {
    const {roles} = req.body
    if (roles) {
        for (let rol in roles){
            if ( !ROLES.includes(roles[rol]) ){
                return res.status(400).json({ message: `Role ${roles[rol]} does not exists` })
            }
        }
    }

    next();
}