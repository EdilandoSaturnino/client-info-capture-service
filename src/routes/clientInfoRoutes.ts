import { Router } from 'express'
import { getClientInfo } from '../controllers/clientInfoController'

const router = Router()

router.get('/', getClientInfo)

export { router as clientInfoRoutes }
