import { Router } from "express";
import { getUsers, createUser, createPost, userPosts, login } from './controllers/UserController'

const routes = Router()

//User routes
routes.get('/users', getUsers)
routes.post('/users/newuser', createUser)
routes.patch('/users/:id', createPost)
routes.get('/users/:id', userPosts)
routes.post('/users/login', login)


export default routes