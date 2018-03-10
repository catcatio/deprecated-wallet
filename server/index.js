export const start = async () => {
  // Express
  const express = require('express')
  const app = express()

  // Next
  await require('./next').start(app)

  // Listen
  app.listen(app.get('port'), err => {
    if (err) throw err
    console.log('Next : ', app.get('port')) // eslint-disable-line
  })

  return app
}
