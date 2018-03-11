import Messenger from './messenger';

export const start = async () => {
  // Express
  const app = await require('./config/express').init()

  // Next - pre
  const nextjs = await require('./config/next').init(app)

  // Routes
  const main = require('./routes')
  main.hook(app, nextjs)

  // const users = require('./routes/users')
  // users.hook(app, nextjs)

  // Messenger
  const messenger = new Messenger()
  await messenger.start(app)

  // Next - post
  await nextjs.start(app, nextjs)

  // Listen
  app.listen(app.get('port'), err => {
    if (err) throw err
    console.log('CatCat :', app.get('port')) // eslint-disable-line
  })

  return app
}
