import express from "express"
import cors from "cors"
import { PUBLIC_FOLDER_PATH } from "./lib/fs-tools.js"
import {
  handleBadRequest,
  handleNotAuth,
  handleNotFound,
  serverError,
} from "./errorHandlers.js"

const server = express()
const port = 3001

server.use(express.json())
server.use(cors())
server.use(express.static(PUBLIC_FOLDER_PATH()))

server.use(handleBadRequest)
server.use(handleNotAuth)
server.use(handleNotFound)
server.use(serverError)

server.listen(port, () => {
  console.log("Server running on part " + port)
})
