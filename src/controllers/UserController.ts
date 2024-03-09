import Users from '../models/Users'
import * as bcrypt from 'bcrypt'
//import 'dotenv/config'
import jwt from 'jsonwebtoken'

async function createUser(req: any, res: any){
    const { password } = req.body
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)
    const user = req.body
    user['password'] = passwordHash
    const newUser = await Users.create(user)
    return res.status(201).json(newUser)
}

async function getUsers(req: any, res: any){
    const users = await Users.find()
    return res.status(200).json(users)
    //Set password
}

async function createPost(req: any, res: any){
    const id = req.params.id
    await Users.updateOne({ _id: id }, { $push: { posts: req.body }})
    return res.status(201).json('Post created successfully!')
}

async function userPosts(req: any, res: any){
    const id = req.params.id
    const posts = await Users.find({ _id: id }, { posts: 1 })
    return res.status(200).json(posts)
}

async function login(req: any, res: any){
    const { email, password } = req.body
    const user = await Users.findOne({ email: email })
    if (!user){
        return res.status(404).json({ response: 'User not found' })
    } else {
        const verifyPassword = await bcrypt.compare(password, user.password)
        if (!verifyPassword){
            return res.status(401).json({ response: 'Wrong password' })
        } else {
            try {
                const secret = 'ASKJDMLAIHJQ'
                const token = jwt.sign({
                    id: user._id
                }, secret)
                const id = user._id
                res.status(200).json({ response: 'Login successful', token, id, user })
            }
            catch (err){
                console.log(err)
            }
        }
    }
}

async function editUser(req: any, res: any){
    const id = req.params.id
    await Users.updateOne({ _id: id }, req.body)
    return res.status(200).json({ response: 'User edited' })
}

async function delUser(req: any, res: any){
    const id = req.params.id
    await Users.findByIdAndDelete({ _id: id })
    return res.status(201).json({ response: 'User removed' })
}

export {
    getUsers,
    createUser,
    createPost,
    userPosts,
    login,
    editUser,
    delUser
}