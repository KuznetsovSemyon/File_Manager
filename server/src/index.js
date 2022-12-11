import cors from 'cors'
import express from 'express'
import { createServer } from 'http'
import apiRouter from './routes/api-router.js'

const app = express()
const server = createServer(app)

const PORT = 5000

app.use(cors())
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))
app.use('/api', apiRouter)
app.use('*', async (req, res) => {
    res.status(404).send('Not found 404')
})

server.listen(PORT, () => console.log(`Server started at ${PORT} port`))
