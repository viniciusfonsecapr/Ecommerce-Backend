import { Router } from 'express'
// Controllers abaixo
import SessionController from './app/controllers/SessionController'
import UserController from './app/controllers/UserController'
import RequestController from './app/controllers/RequestController'

const routes = new Router()

routes.post('/users', UserController.store)

routes.post('/sessions', SessionController.store)

routes.post('/requests', RequestController.store)

export default routes
