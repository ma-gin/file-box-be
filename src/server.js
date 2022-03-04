import express from "express"
import {
  handleBadRequest,
  handleNotAuth,
  handleNotFound,
  serverError,
} from "./errorHandlers.js"

const server = express()
const port = 3001

server.listen(port, () => {
  console.log("Server running on part " + port)
})

server.use(handleBadRequest)
server.use(handleNotAuth)
server.use(handleNotFound)
server.use(serverError)
