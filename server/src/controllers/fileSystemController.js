import fs from 'fs'
import path from 'path'

class FileSystemController {

     getFiles(req, res) {
         try {
             let fileSize
             const { localPath } = req.query
             const fullPath = path.join('./local_files', localPath)

             fs.readdir(fullPath, async (err, files) => {
                 const promises = files.map(file =>
                     new Promise ((resolve, reject) => {
                         fs.stat(`${fullPath}/${file}`, (err, fileStats) => {
                             if (err) reject(err)
                             else {
                                 fileSize = fileStats.isFile() ? fileStats.size + ' Б' : '-'
                                 const fileName = file
                                 resolve({fileName, fileSize})
                             }
                         })
                     })
                 )
                 const response = await Promise.all(promises)

                 res.status(200).json(response)
             })
        } catch (e) {
            res.status(400).json({ error: true, message: e.message || e})
        }
    }

     createFolder(req, res) {
        try {
            const { localPath } = req.body
            const fullPath = path.join('./local_files', localPath)

            fs.mkdirSync(fullPath, { recursive: true })

            res.status(200).json({ message: 'Folder has been created' })
        } catch (e) {
            res.status(400).json({ error: true, message: e.message || e })
        }
    }

     download(req, res) {
        try {
            const { localPath } = req.query
            const fullPath = path.join('./local_files', localPath)

            res.download(fullPath)
        } catch (e) {
            res.status(400).json({ error: true, message: e.message || e})
        }
    }

     upload(req, res) {
         try {
             const path = req.file.path
             res.status(200).json({ message: 'File has been uploaded', path })
         } catch (e) {
             res.status(400).json({ error: true, message: e.message || e})
         }
    }

     delete(req, res) {
        try {
            const { localPath } = req.body
            const fullPath = path.join('./local_files', localPath)

            fs.lstatSync(fullPath).isFile() ?
                fs.unlinkSync(fullPath):
                fs.rmSync(fullPath, { recursive: true })

            res.status(200).json({ deleted: fullPath })
        } catch (e) {
            res.status(400).json({ error: true, message: e.message || e})
        }
    }

}

export default new FileSystemController()