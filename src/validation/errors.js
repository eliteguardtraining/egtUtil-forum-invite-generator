export const NO_EMAIL = 'NO_EMAIL'
export const INVALID_EMAIL = 'INVALID_EMAIL'
export const USER_NOT_FOUND = 'USER_NOT_FOUND'
export const EMAILS_DONT_MATCH = 'EMAILS_DONT_MATCH'
export const IS_NOT_VIP = 'IS_NOT_VIP'
export const ALREADY_HAS_FORUM_ACCOUNT = 'ALREADY_HAS_FORUM_ACCOUNT'
export const MONGOOSE_ERROR = 'MONGOOSE_ERROR'
export const DISCOURSE_ERROR = 'DISCOURSE_ERROR'

export default {

  [NO_EMAIL]: {
    code: NO_EMAIL,
    message: 'No email address provided.',
  },
  [INVALID_EMAIL]: {
    code: INVALID_EMAIL,
    message: 'Invalid email address provided.',
  },
  [USER_NOT_FOUND]: {
    code: USER_NOT_FOUND,
    message: 'User not found.',
  },
  [EMAILS_DONT_MATCH]: {
    code: EMAILS_DONT_MATCH,
    message: 'User email in database does not match provided email address.',
  },
  [IS_NOT_VIP]: {
    code: IS_NOT_VIP,
    message: 'User does not have VIP status.',
  },
  [ALREADY_HAS_FORUM_ACCOUNT]: {
    code: ALREADY_HAS_FORUM_ACCOUNT,
    message: 'User already has a forum account.',
  },

  MONGOOSE_ERROR: {},
  DISCOURSE_ERROR: {},

}
