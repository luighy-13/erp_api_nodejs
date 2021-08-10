import { Router } from 'express'

import * as userController from '../app/controllers/userController'
const router = Router()

router.get('/', userController.showUsers)
router.get('/create', userController.createUser)

export default router
