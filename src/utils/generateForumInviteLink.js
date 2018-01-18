import axios from 'axios'
import config from 'config'
import { isEmail } from 'validator'

export default email => new Promise((resolve, reject) => {

  if (!email || typeof email !== 'string' || !isEmail(email)) {
    reject(new Error('Email missing or invalid email provided.'))
  }

  axios.post(`${config.discourseAPIUrl}/invites/link?api_username=${config.discourseAPIUsername}&api_key=${config.discourseAPIKey}`,
    { email })
    .then(res => resolve(res.data))
    .catch(error => reject(new Error(error)))

})
