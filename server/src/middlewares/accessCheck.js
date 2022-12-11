import path from 'path'
import fs from 'fs'

const doesFolderExists = async (req, res,  next) => {
    const localPath = req.body.localPath

    const fullPath = path.join('./local_files', localPath)

    if (fs.existsSync(fullPath)) {
        res.status(400).json({ error: true, message: 'Folder is already exists' })
    } else
        next()
}

const isFileAccessible = async (req, res, next) => {
    let localPath = req.body.localPath
    if(!localPath) {
        localPath = req.query.localPath
    }

    const fullPath = path.join('./local_files', localPath)

    if (!fs.existsSync(fullPath) || !fs.lstatSync(fullPath).isFile()) {
        res.status(400).json({ error: true, message: 'File does not exist' })
    } else
        next()
}

const isFolderAccessible = async (req, res, next) => {
    let localPath = req.body.localPath
    if(!localPath) {
        localPath = req.query.localPath
    }
    const fullPath = path.join('./local_files', localPath)

    if (!fs.existsSync(fullPath) || !fs.lstatSync(fullPath).isDirectory()) {
        res.status(400).json({ error: true, message: 'Folder does not exist' })
    } else
        next()
}

const isItemAccessible = async (req, res, next) => {
    let localPath = req.body.localPath
    if(!localPath) {
        localPath = req.query.localPath
    }
    const fullPath = path.join('./local_files', localPath)

    if (!fs.existsSync(fullPath)) {
        res.status(400).json({ error: true, message: 'Item does not exist' })
    } else
        next()
}

export { doesFolderExists, isFileAccessible, isFolderAccessible, isItemAccessible }