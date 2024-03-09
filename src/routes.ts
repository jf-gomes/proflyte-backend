import { Router } from "express";
import { getUsers, createUser, login, editUser, delUser } from './controllers/UserController'
import { createPost, getPosts, editPost } from "./controllers/PostController";

const routes = Router()

//User routes
routes.get('/users', getUsers)
routes.post('/users/newuser', createUser)
routes.post('/users/login', login)
routes.patch('/users/:id', editUser)
routes.delete('/users/:id', delUser)

//Post routes
routes.post('/post/new', createPost)
routes.get('/post/get/:id', getPosts)
routes.patch('/post/edit/:id', editPost)

export default routes