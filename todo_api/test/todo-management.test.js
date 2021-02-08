import TodosDAO from "../src/dao/todosDAO"
import { ObjectId } from "bson"

const date = new Date()

const todo = {
  _id: "",
  user_id: ObjectId("601bdc6c9f7b1e3450829ebc"),
  title: "test",
  addedOn: date,
  lastUpdatedOn: date,
  finishedOn: null,
}

const newUserId = ObjectId("601bf2d316e757169c3aa7bf")

describe("Todo Management", () => {
  beforeAll(async () => {
    await TodosDAO.injectDB(global.todoClient)
  })

  afterAll(async () => {
    const todosCollection = await global.todoClient
      .db(process.env.TODO_NS)
      .collection("todos")
    await todosCollection.deleteMany({
      title: "test",
    })
  })

  test("Can add a new todo", async () => {
    const addTodoResult = await TodosDAO.addTodo(
      todo.user_id,
      todo.title,
      todo.addedOn,
    )

    expect(addTodoResult.insertedCount).toBe(1)
    expect(addTodoResult.insertedId).not.toBe(null)

    todo._id = addTodoResult.insertedId
    const insertedTodo = await TodosDAO.getTodoById(addTodoResult.insertedId)

    expect(todo).toEqual(insertedTodo)
  })

  test("Can only update a todo if user created it", async () => {
    const updateTodoResult = await TodosDAO.changeTitle(
      todo._id,
      newUserId,
      new Date(),
      "title",
    )
    expect(updateTodoResult.modifiedCount).toBe(0)
  })

  test("Can mark a todo as finished", async () => {
    const date = new Date()

    todo.lastUpdatedOn = date
    todo.finishedOn = date

    const updateTodoResult = await TodosDAO.markAsFinished(
      todo._id,
      todo.user_id,
      date,
    )

    expect(updateTodoResult.modifiedCount).toBe(1)
    const actualUpdatedTodo = await TodosDAO.getTodoById(todo._id)
    expect(actualUpdatedTodo).toEqual(todo)
  })

  test("Can mark a todo as unfinished", async () => {
    const date = new Date()

    todo.lastUpdatedOn = date
    todo.finishedOn = null

    const updateTodoResult = await TodosDAO.markAsUnfinished(
      todo._id,
      todo.user_id,
      date,
    )

    expect(updateTodoResult.modifiedCount).toBe(1)
    const actualUpdatedTodo = await TodosDAO.getTodoById(todo._id)
    expect(actualUpdatedTodo).toEqual(todo)
  })

  test("Can change title", async () => {
    const date = new Date()

    todo.title = "new title"
    todo.lastUpdatedOn = date

    const updateTodoResult = await TodosDAO.changeTitle(
      todo._id,
      todo.user_id,
      date,
      todo.title,
    )

    expect(updateTodoResult.modifiedCount).toBe(1)
    const actualUpdatedTodo = await TodosDAO.getTodoById(todo._id)
    expect(actualUpdatedTodo).toEqual(todo)
  })

  test("Can only delete a todo if user created it", async () => {
    const deleteTodoResult = await TodosDAO.deleteTodo(todo._id, newUserId)
    expect(deleteTodoResult.deletedCount).toBe(0)
  })

  test("Can delete a todo", async () => {
    const deleteTodoResult = await TodosDAO.deleteTodo(todo._id, todo.user_id)
    expect(deleteTodoResult.deletedCount).toBe(1)
  })
})
