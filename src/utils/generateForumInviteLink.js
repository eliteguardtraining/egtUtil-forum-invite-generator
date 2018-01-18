import axios from 'axios'
import config from 'config'
import errors from 'validation/errors'
import { isEmail } from 'validator'
import mongoose from 'mongoose'

// Register read-only user model
const UserModel = mongoose.model('User', new mongoose.Schema())

export default email => new Promise((resolve, reject) => {

  if (!email || typeof email !== 'string') {
    return reject(errors.NO_EMAIL)
  }

  const cleanedEmail = email.toLowerCase()

  if (!isEmail(cleanedEmail)) {
    return reject(errors.INVALID_EMAIL)
  }

  // Find by username or email
  UserModel.findOne({ $or: [{ email: cleanedEmail }, { username: cleanedEmail }] })
    .lean()
    .exec((error, doc) => {

      if (error) {
        return reject({ ...errors.MONGOOSE_ERROR, message: error })
      }

      if (!doc) {
        return reject(errors.USER_NOT_FOUND)
      }

      const user = doc

      if (user.email !== cleanedEmail) {
        return reject(errors.EMAILS_DONT_MATCH)
      }

      if (!user.isVip) {
        return reject(errors.IS_NOT_VIP)
      }

      axios.post(`${config.discourseAPIUrl}/invites/link?api_username=${config.discourseAPIUsername}&api_key=${config.discourseAPIKey}`,
        { email: cleanedEmail })
        .then(res => resolve(res.data))
        .catch((discourseError) => {

          if (discourseError
            && discourseError.response
            && discourseError.response.status
            && discourseError.response.status === 422) {
            return reject(errors.ALREADY_HAS_FORUM_ACCOUNT)
          }

          return reject({ ...errors.DISCOURSE_ERROR, message: discourseError })

        })

    })

})
