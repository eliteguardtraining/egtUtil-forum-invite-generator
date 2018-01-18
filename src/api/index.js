import config from 'config'
import express from 'express'
import generateForumInviteLink from 'utils/generateForumInviteLink'
import logger from 'utils/logger'
import mongoose from 'mongoose'

// Error validation
import { ALREADY_HAS_FORUM_ACCOUNT } from 'validation/errors'

const api = express.Router()

// Main endpoint ---------
// Gets a Discourse invite link based on email
// address, and redirects to that link.
api.get('/', (req, res) => {

  const email = req.query.contact

  generateForumInviteLink(email)
    .then(link => res.redirect(link))
    .catch((error) => {

      // Log all errors
      logger.error(error)

      if (error.code === ALREADY_HAS_FORUM_ACCOUNT) {
        res.redirect(config.discourseForumUrl)
      } else {
        res.send(error.message)
        // res.redirect(config.failureRedirect)
      }
    })

})

// Status endpoint for Kubernetes readiness/liveness probes
api.get('/status', (req, res) => {
  if (mongoose.connection.readyState === 1) {
    res.status(200).send('API is live and connected to DB.')
  } else {
    res.status(500).send('API is not connected to DB.')
  }
})

export default api
