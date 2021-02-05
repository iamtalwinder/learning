import { Router } from "express"
import usersCtrl from "./users.controller"

const router = new Router()

router.route("/register").post(usersCtrl.register)

export default router
