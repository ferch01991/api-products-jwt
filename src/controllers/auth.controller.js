import User from "./../models/User";
import jwt from  "jsonwebtoken";
import config from "./../config"

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
  
      // encrypting password
      console.log(newUser)
  
      // saving the new user
      const savedUser = await newUser.save();

      const token = jwt.sign({id: savedUser._id}, config.SECRET, {
        expiresIn: 86400 // expira en 24 horas
      })
      
    res.status(200).json({token})
}
export const signIn = async (req, res) => {
    res.json('singin!')
}