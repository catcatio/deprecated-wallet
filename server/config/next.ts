export const init = async app => {
  const next = require('next')
  const dev = process.env.NODE_ENV !== 'production'
  const nextjs = next({ dev })
  await nextjs.prepare()

  return nextjs
}

export const route = async (app, nextjs) => {
  const main = require('../routes')
  main.hook(app, nextjs)

  const users = require('../routes/users')
  users.hook(app, nextjs)

  return nextjs
}

export const start = async (app, nextjs) => {
  // All
  const handle = nextjs.getRequestHandler()
  app.get('*', (req, res, next) => handle(req, res, next))

  return nextjs
}
