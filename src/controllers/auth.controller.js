import { User } from "./../models/User";

export const signUp = async (req, res) => {
    const {username, password, email, roles} = req.body
    console.log(req.body)
    const newUser = new User({
        username,
        email, 
        password: User.encryptPassword(password)
    })

    console.log(newUser)

    console.log(req.body)
    res.json('singUp!')
}
export const signIn = async (req, res) => {
    res.json('singin!')
}