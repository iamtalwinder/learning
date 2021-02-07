import TodosDAO from "../dao/todosDAO"

export default class UserController {
  static async createTodo(req, res) {
    try {
      const date = new Date()
      const { todoTitle } = req.body
      const userId = req.userClaim._id

      const result = await TodosDAO.addTodo(userId, todoTitle, date)
      res.status(201).send(await TodosDAO.getTodoById(result.insertedId))
    } catch (e) {
      res.status(500).send({ error: e })
    }
  }
}
