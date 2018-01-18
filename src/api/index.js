import config from 'config'
import express from 'express'
import generateForumInviteLink from 'utils/generateForumInviteLink'
import logger from 'utils/logger'

const api = express.Router()

// Main endpoint ---------
// Gets a Discourse invite link based on email
// address, and redirects to that link.
api.get('/', (req, res) => {

  const email = req.query.contact

  generateForumInviteLink(email)
    .then(link => res.redirect(link))
    .catch((error) => {
      logger.error(error)
      res.redirect(config.failureRedirect)
    })

})

// Status endpoint for Kubernetes readiness/liveness probes
api.get('/status', (req, res) => res.send(200))

export default api
