import UsersDAO from "../src/dao/usersDAO"

const testUser = {
  name: "Mr. Magical",
  email: "magicz@cats.com",
  password: "password",
}

describe("User Management", () => {
  beforeAll(async () => {
    await UsersDAO.injectDB(global.todoClient)
  })

  afterAll(async () => {
    await UsersDAO.deleteUser(testUser.email)
  })

  test("it can add a new user to the database", async () => {
    const actual = await UsersDAO.addUser(testUser)
    expect(actual.success).toBeTruthy()
    expect(actual.error).toBeUndefined()

    const user = await UsersDAO.getUser(testUser.email)

    delete user._id
    expect(user).toEqual(testUser)
  })

  test("it returns an error when trying to register duplicate user", async () => {
    const expected = "A user with the given email already exists."
    const actual = await UsersDAO.addUser(testUser)
    expect(actual.success).toBeUndefined()
    expect(actual.error).toBe(expected)
  })
})
