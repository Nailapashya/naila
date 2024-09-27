import { Router } from "express"

import { authentication } from "../middlewares/authentication"
import { deleteUser, findAll, findById, login, Register, updateUser } from "../controllers/controller"

const router = Router()

router.post("/register", Register)
router.post("/login", login)
router.get('/', authentication, findAll)
router.get('/:id', authentication, findById)
router.put('/:id', authentication, updateUser)
router.delete('/:id', authentication, deleteUser)


export default router                                                                                