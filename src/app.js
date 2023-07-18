import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()

app.use("/api", router)

app.listen(8000, () => {
  console.log(`Server is running on 8000`)
})