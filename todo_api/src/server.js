import express from "express"
import cors from "cors"
import users from "./api/users.routes"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/user", users)
app.use("*", (req, res) => res.status(404).send({ error: "not found" }))

export default app
