import { Router } from "express";
import { test } from './controllers/UserController'

const routes = Router()

//User routes
routes.get('/users', test)


export default routes