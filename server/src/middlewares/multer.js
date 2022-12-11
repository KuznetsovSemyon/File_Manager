import multer from 'multer'
import path from "path";

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const { localPath } = req.body

        const fullPath = path.join('./local_files', localPath)
        cb(null, fullPath)
    },

    filename: (req, file, cb) => {
        req.filename = file.originalname
        cb(null, file.originalname)
    }

});

const multerObj = multer({
    storage: fileStorage,
    limits: { fileSize: 10 * 1024 * 1024 },
});

const uploadFile = (req, res, next) => {
    const upload = multerObj.single('file')

    upload(req, res, err => {
        if (err) {
            return res.status(400).json({ error: true, message: err.message });
        }
        next();
    })
}

export default uploadFile