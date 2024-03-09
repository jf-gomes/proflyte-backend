import { Router } from "express";
import { getUsers, createUser, userPosts, login } from './controllers/UserController'
import { createPost, getPosts } from "./controllers/PostController";

const routes = Router()

//User routes
routes.get('/users', getUsers)
routes.post('/users/newuser', createUser)
//routes.patch('/users/:id', createPost)
routes.get('/users/:id', userPosts)
routes.post('/users/login', login)

//Post routes
routes.post('/post/new', createPost)
routes.get('/post/get/:id', getPosts)

export default routes