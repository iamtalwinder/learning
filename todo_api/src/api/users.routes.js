import { Router } from "express"
import usersCtrl from "./users.controller"
import Middleware from "./middleware"

const router = new Router()

router.route("/register").post(usersCtrl.register)
router.route("/login").post(usersCtrl.login)
router.route("/delete").delete(Middleware.auth, usersCtrl.delete)

export default router
