exports.start = async () => {
  console.log('Server start...')

  // Express
  const app = await require('./express').start()

  // Messenger
  await require('./messenger').start(app)

  // Next
  await require('./next').start(app)

  // Listen
  app.listen(app.get('port'), err => {
    if (err) throw err
    console.log('CatCat :', app.get('port')) // eslint-disable-line
  })

  return app
}
