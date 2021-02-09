import TodosDAO from "../dao/todosDAO"

export default class UserController {
  static async createTodo(req, res) {
    try {
      const date = new Date()
      const { todoTitle } = req.body
      if (!todoTitle || typeof todoTitle !== "string") {
        res
          .status(400)
          .json({ error: "Bad todoTitle format, expected string." })
        return
      }
      const userId = req.userClaim._id

      const result = await TodosDAO.addTodo(userId, todoTitle, date)
      res.status(201).send(await TodosDAO.getTodoById(result.insertedId))
    } catch (e) {
      res.status(500).send({ error: e })
    }
  }

  static async deleteTodo(req, res) {
    try {
      const { todoId } = req.body
      const userId = req.userClaim._id
      res.status(200).send(await TodosDAO.deleteTodo(todoId, userId))
    } catch (e) {
      res.status(500).send({ error: e })
    }
  }

  static async markAsFinished(req, res) {
    try {
      const { todoId } = req.body
      const userId = req.userClaim._id
      res
        .status(200)
        .send(await TodosDAO.markAsFinished(todoId, userId, new Date()))
    } catch (e) {
      res.status(500).send({ error: e })
    }
  }

  static async markAsUnfinished(req, res) {
    try {
      const { todoId } = req.body
      const userId = req.userClaim._id
      res
        .status(200)
        .send(await TodosDAO.markAsUninished(todoId, userId, new Date()))
    } catch (e) {
      res.status(500).send({ error: e })
    }
  }
}
