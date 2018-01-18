export default {
  port: process.env.PORT || 3001,
  bodyLimit: '10kb',
  dbURI: process.env.MONGODB_URI,
  discourseAPIUrl: 'https://eliteguardtraining.com/forum',
  discourseAPIKey: 'f884bc71cfd8386622696115b1e62f8d8c77484e64e5c9526484b612563ea5fc',
  discourseAPIUsername: 'EliteGuardTraining',
  failureRedirect: 'https://eliteguardtraining.com',
}
