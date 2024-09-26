import { Router } from "express"
import * as AuthController from "../controllers/authController"
import { authentication } from "../middlewares/authentication"
const router = Router()


router.post("/register",AuthController.Register)
router.post("/login", AuthController.login)
router.get('/', authentication, AuthController.findAll)
router.get('/:id', authentication, AuthController.findById)
router.put('/:id', authentication, AuthController.updateUser)
router.delete('/:id', authentication, AuthController.deleteUser)


export default router                                                                                