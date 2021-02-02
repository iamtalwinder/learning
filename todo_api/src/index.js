import app from "./server"

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`),
)
