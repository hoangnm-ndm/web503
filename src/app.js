import express from "express"
import dotenv from "dotenv"
import router from "./routes"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"
dotenv.config()

const { PORT, DB_URL } =  process.env

const app = express()

app.use(cors())
// app.use(express.json({strict: false}))
// app.use(bodyParser.urlencoded({ extended: true }))

app.use("/api", router)

mongoose.connect(`${DB_URL}`).then(() => {
  console.log(`DB connection established!`)
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})