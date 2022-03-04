import { join } from "path"
import fs from "fs-extra"
import { readdirSync } from "fs"

const { writeFile, remove, rename } = fs

const FILE_FOLDER_PATH = join(process.cwd(), "./public/files")

export const PUBLIC_FOLDER_PATH = () => join(process.cwd(), "./public")

export const saveFile = async (fileName, contentAsBuffer) => {
  try {
    await writeFile(join(FILE_FOLDER_PATH, fileName), contentAsBuffer)
  } catch (error) {
    throw "problem with file upload"
  }
}

export const deleteFile = async (fileName) => {
  await remove(join(FILE_FOLDER_PATH, fileName))
}

export const renameFile = async (filePath, newPath) => {
  await rename(
    join(FILE_FOLDER_PATH, filePath),
    join(FILE_FOLDER_PATH, newPath)
  )
}

export const readDir = () => {
  const files = readdirSync(FILE_FOLDER_PATH)
  files.map((file) => {
    const fileData = {
      name: file,
      url: `/files/${file}`,
    }
  })
  return files
}
