import Messenger from './messenger';

export const start = async () => {
  // Express
  const app = await require('./config/express').init()

  // Next - pre
  const nextConfig = require('./config/next')
  const nextjs = await nextConfig.init(app)

  // Route
  await nextConfig.route(app, nextjs)

  // Messenger
  const messenger = new Messenger()
  await messenger.start(app)

  // Next - post
  await nextConfig.start(app, nextjs)

  // Listen
  app.listen(app.get('port'), err => {
    if (err) throw err
    console.log('CatCat :', app.get('port')) // eslint-disable-line
  })

  return app
}
