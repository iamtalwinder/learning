import { Router } from "express"
import todosCtrl from "./todos.controller"
import Middleware from "./middleware"

const router = new Router()

router.use(Middleware.auth)

router.route("/create-todo").post(todosCtrl.createTodo)
router.route("/delete-todo").delete(todosCtrl.deleteTodo)
router.route("/mark-as-finished").patch(todosCtrl.markAsFinished)
router.route("/mark-as-unfinished").patch(todosCtrl.markAsFinished)
router.route("/change-title").patch(todosCtrl.changeTitle)
router.route("/get-todos").get(todosCtrl.getTodos)

export default router
