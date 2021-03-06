import { ObjectId } from "bson"

let todos

export default class TodosDAO {
  static async injectDB(conn) {
    if (todos) {
      return
    }
    try {
      todos = await conn.db(process.env.TODO_NS).collection("todos")
    } catch (e) {
      console.error(`Unable to establish collection handles in todoDAO: ${e}`)
    }
  }

  /**
   * Gets a todo by its id
   * @param {string} todoId - The _id of a todo in the 'todos' collection
   * @returns {DAOResponse} Returns either a single todo or nothing
   */
  static async getTodoById(todoId) {
    try {
      return await todos.findOne({ _id: ObjectId(todoId) })
    } catch (e) {
      return null
    }
  }

  /**
   * Gets a todos by user_id
   * @param {string} userId - The user_id of a todo in the 'todos' collection
   * @returns {DAOResponse} Returns either array of todos or nothing
   */
  static async getTodosByUserId(userId) {
    try {
      return (await todos.find({ user_id: ObjectId(userId) })).toArray()
    } catch (e) {
      return null
    }
  }

  /**
   * Adds a todo to the `todos` collection
   * @param {string} userId - The _id of a user in the 'users' collection
   * @param {string} todoTitle - Todo title
   * @param {date} date - Current date
   * @returns {DAOResponse} Returns an object with either DB response or "error"
   */
  static async addTodo(userId, todoTitle, date) {
    try {
      const todoDoc = {
        user_id: ObjectId(userId),
        title: todoTitle,
        addedOn: date,
        lastUpdatedOn: date,
        finishedOn: null,
      }

      return await todos.insertOne(todoDoc)
    } catch (e) {
      console.error(`Unable to add todo: ${e}`)
      return { error: e }
    }
  }

  /**
   * Update a todo by its id
   * @param {string} todoId - The _id of a todo in the 'todos' collection
   * @param {string} userId - The _id of a user in the 'users' collection
   * @param {date} date - Current date
   * @returns {DAOResponse} Returns an object with either DB response or "error"
   */
  static async markAsFinished(todoId, userId, date) {
    try {
      return await todos.updateOne(
        { _id: ObjectId(todoId), user_id: ObjectId(userId) },
        {
          $set: {
            lastUpdatedOn: date,
            finishedOn: date,
          },
        },
      )
    } catch (e) {
      console.error(`Unable to update todo: ${e}`)
      return { error: e }
    }
  }

  /**
   * Update a todo by its id
   * @param {string} todoId - The _id of a todo in the 'todos' collection
   * @param {string} userId - The _id of a user in the 'users' collection
   * @param {date} date - Current date
   * @returns {DAOResponse} Returns an object with either DB response or "error"
   */
  static async markAsUnfinished(todoId, userId, date) {
    try {
      return await todos.updateOne(
        { _id: ObjectId(todoId), user_id: ObjectId(userId) },
        {
          $set: {
            lastUpdatedOn: date,
            finishedOn: null,
          },
        },
      )
    } catch (e) {
      console.error(`Unable to update todo: ${e}`)
      return { error: e }
    }
  }

  /**
   * Update a todo by its id
   * @param {string} todoId - The _id of a todo in the 'todos' collection
   * @param {string} userId - The _id of a user in the 'users' collection
   * @param {date} date - Current date
   * @param {string} todoTitle - Todo title
   * @returns {DAOResponse} Returns an object with either DB response or "error"
   */
  static async changeTitle(todoId, userId, date, todoTitle) {
    try {
      return await todos.updateOne(
        { _id: ObjectId(todoId), user_id: ObjectId(userId) },
        {
          $set: {
            title: todoTitle,
            lastUpdatedOn: date,
          },
        },
      )
    } catch (e) {
      console.error(`Unable to update todo: ${e}`)
      return { error: e }
    }
  }

  /**
   * Delete a todo by its id
   * @param {string} todoId - The _id of a todo in the 'todos' collection
   * @param {string} userId - The _id of a user in the 'users' collection
   * @returns {DAOResponse} Returns an object with either DB response or "error"
   */

  static async deleteTodo(todoId, userId) {
    try {
      return await todos.deleteOne({
        _id: ObjectId(todoId),
        user_id: ObjectId(userId),
      })
    } catch (e) {
      console.error(`Unable to delete todo: ${e}`)
      return { error: e }
    }
  }
}
