import {Router} from 'express'
const router = Router();

import * as userController from '../app/controllers/userController'

router.get('/', userController.createUser)


export default router;