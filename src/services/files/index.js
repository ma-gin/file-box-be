import express from "express"
import multer from "multer"
import {
  deleteFile,
  saveFile,
  renameFile,
  readDir,
} from "../../lib/fs-tools.js"

const filesRouter = express.Router()

filesRouter.post("/", multer().single("file"), async (req, res, next) => {
  try {
    await saveFile(req.file.originalname, req.file.buffer)
    res.status(201).send({ message: "File uploaded successfully" })
  } catch (error) {
    next(error)
  }
})
filesRouter.get("/", async (req, res, next) => {
  try {
    const files = await readDir()
    res.send(files)
  } catch (error) {
    next(error)
  }
})
filesRouter.put("/:fileId", async (req, res, next) => {
  try {
    const fileName = req.params.fileId
    const ext = fileName.split(".").slice(-1)[0]
    const newFileName = `${req.body.filename}.${ext}`
    await renameFile(fileName, newFileName)
    res.send({ message: "updated" })
  } catch (error) {
    next(error)
  }
})
filesRouter.delete("/:fileId", async (req, res, next) => {
  try {
    const fileName = req.params.fileId
    await deleteFile(fileName)
    res.status(204).send()
  } catch (error) {
    next(error)
  }
})

export default filesRouter
