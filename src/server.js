import express from "express"
import cors from "cors"
import { PUBLIC_FOLDER_PATH } from "./lib/fs-tools.js"
import {
  handleBadRequest,
  handleNotAuth,
  handleNotFound,
  serverError,
} from "./errorHandlers.js"
import filesRouter from "./services/files/index.js"
import listEndpoints from "express-list-endpoints"

const server = express()
const port = 3001

server.use(express.json())
server.use(cors())
server.use(express.static(PUBLIC_FOLDER_PATH()))

server.use("/files", filesRouter)

server.use(handleBadRequest)
server.use(handleNotAuth)
server.use(handleNotFound)
server.use(serverError)

console.table(listEndpoints(server))

server.listen(port, () => {
  console.log("Server running on part " + port)
})
