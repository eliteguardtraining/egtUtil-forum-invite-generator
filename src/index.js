/* Entry point */
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import http from 'http'
import logger from 'utils/logger'

// Instantiate express
const app = express()
app.server = http.createServer(app)

// CORS (unsafe)
app.use(cors())

// Use JSON and limit body size
app.use(bodyParser.json({
  limit: '10kb',
}))

const testRouter = express.Router()
testRouter.get('/status', (req, res) => {
  res.status(200).send('Working via cluster.')
})

app.use('/', testRouter)

// Start listening
app.listen(3001, () => {
  logger.info('API is listening on port 3001.')
})
