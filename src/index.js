/* Entry point */
import api from 'api'
import bodyParser from 'body-parser'
import config from 'config'
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
  limit: config.bodyLimit,
}))

app.use('/', api)

// Start listening
app.listen(config.port, () => {
  logger.info(`API is listening on port ${config.port}.`)
})
