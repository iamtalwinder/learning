import app from "./server"
import { MongoClient } from "mongodb"
import UsersDAO from "./dao/usersDAO"
import TodosDAO from "./dao/todosDAO"

MongoClient.connect(process.env.TODO_DB_URI, {
  poolSize: 50,
  wtimeout: 2500,
  useNewUrlParser: true,
})
  .catch((err) => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async (client) => {
    await UsersDAO.injectDB(client)
    await TodosDAO.injectDB(client)

    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`)
    })
  })
