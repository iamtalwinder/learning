let users

export default class UsersDAO {
  static async injectDB(conn) {
    if (users) {
      return
    }
    try {
      users = await conn.db(process.env.TODO_NS).collection("users")
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`)
    }
  }

  /**
   * Finds a user in the `users` collection
   * @param {string} email - The email of the desired user
   * @returns {Object | null} Returns either a single user or nothing
   */
  static async getUser(email) {
    return await users.findOne({ email: email })
  }

  /**
   * Adds a user to the `users` collection
   * @param {UserInfo} userInfo - The information of the user to add
   * @returns {DAOResponse} Returns either a "success" or an "error" Object
   */
  static async addUser(userInfo) {
    try {
      await users.insertOne({
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
      })
      return { success: true }
    } catch (e) {
      if (String(e).startsWith("MongoError: E11000 duplicate key error")) {
        return { error: "A user with the given email already exists." }
      }
      console.error(`Error occurred while adding new user, ${e}.`)
      return { error: e }
    }
  }

  /**
   * Delete a user in 'users' collection
   * @param {string} email - The email of the desired userr
   * @returns {DAOResponse} Returns either a "success" or an "error" Object
   */

  static async deleteUser(email) {
    try {
      await users.deleteOne({ email })
      if (!(await this.getUser(email))) {
        return { success: true }
      } else {
        console.error(`Deletion unsuccessful`)
        return { error: `Deletion unsuccessful` }
      }
    } catch (e) {
      console.error(`Error occurred while deleting user, ${e}`)
      return { error: e }
    }
  }
}
