import { check, body, query, validationResult } from 'express-validator'

const errorHandler = function (req, res, next) {
    const errors = validationResult(req)

    if (!errors.isEmpty())
        return res.status(422).json(errors.array())
    next()
}

const pathQueryCheck = [
    query('localPath')
        .exists()
        .withMessage('localPath is required')
        .bail()

        .isString()
        .withMessage('localPath must be string'),

    errorHandler
]

const pathBodyCheck = [
    body('localPath')
        .exists()
        .withMessage('localPath is required')
        .bail()

        .isString()
        .withMessage('localPath must be string'),

    errorHandler
]

const pathBodyLengthCheck = [
    body('localPath')
        .exists()
        .withMessage('localPath is required')
        .bail()

        .isString()
        .withMessage('localPath must be string')
        .bail()

        .isLength({ min: 1 })
        .withMessage('Folder name must be at least one character long'),

    errorHandler
]

const uploadParamsCheck = [
    check('file')
        .custom((value, { req }) => {
            return req.file.path
        })
        .withMessage('file is required'),

    errorHandler
]


export { pathBodyCheck, pathQueryCheck, pathBodyLengthCheck, uploadParamsCheck }