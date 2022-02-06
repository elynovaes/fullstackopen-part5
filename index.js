const config = require('./utils/config')
const logger = require('./utils/logger')
const http = require('http')
const app = require('./app')

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})