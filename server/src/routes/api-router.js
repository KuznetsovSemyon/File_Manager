import { Router } from 'express'
import uploadFile from '../middlewares/multer.js'
import fileSystemController from '../controllers/fileSystemController.js'
import { pathBodyCheck, pathQueryCheck, pathBodyLengthCheck, uploadParamsCheck } from '../middlewares/reqParamsCheck.js'
import { isItemAccessible, isFileAccessible, isFolderAccessible, doesFolderExists } from '../middlewares/accessCheck.js'

const router = Router()

router.get('/download', pathQueryCheck, isFileAccessible, fileSystemController.download)
router.get('/files_list', pathQueryCheck, isFolderAccessible, fileSystemController.getFiles)
router.post('/upload', uploadFile, uploadParamsCheck, fileSystemController.upload)
router.post('/create_folder', pathBodyLengthCheck, doesFolderExists, fileSystemController.createFolder)
router.delete('/delete', pathBodyCheck, isItemAccessible, fileSystemController.delete)

export default router