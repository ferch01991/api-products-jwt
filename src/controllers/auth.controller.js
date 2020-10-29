import User from "./../models/User";
import Role from "./../models/Role";
import jwt from  "jsonwebtoken";
import config from "./../config"
import { response } from "express";

export const signUp = async function(req, res) {
    
      const { username, email, password, roles } = req.body;
  
      // const rolesFound = await Role.find({ name: { $in: roles } });
  
      // creating a new User
      const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password),
        // roles: rolesFound.map((role) => role._id),
      });

      if (roles) {
        const findRoles = await Role.find({name: {$in: roles}})
        newUser.roles = findRoles.map(role => role._id) 
      } else {
        const role = await Role.findOne({name: 'user'})
        newUser.roles = [role._id]
      }
  
      // saving the new user
      const savedUser = await newUser.save();

      console.log(savedUser)

      const token = jwt.sign({id: savedUser._id}, config.SECRET, {
        expiresIn: 86400 // expira en 24 horas
      })
      
    res.status(200).json({token})
}
export const signIn = async (req, res) => {
  const {email, password} = req.body
  const userFound = await User.findOne({email: email}).populate('roles')

  if(!userFound) return res.status(400).json('user not found');

  const matchPassword = await User.comparePassword(password, userFound.password)
  if (!matchPassword) return res.status(400).json('password not match');

  const token = jwt.sign({id: userFound._id}, config.SECRET, {
    expiresIn: 86400 // expira en 24 horas
  })

  console.log(userFound)

  res.status(200).json({token})
}