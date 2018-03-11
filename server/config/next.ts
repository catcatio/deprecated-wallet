export const init = async app => {
  const next = require('next')
  const dev = process.env.NODE_ENV !== 'production'
  const nextjs = next({ dev })
  await nextjs.prepare()
  return nextjs
}

export const start = async (app, nextjs) => {
  const handle = nextjs.getRequestHandler()
  app.get('*', (req, res) => handle(req, res))
  return app
}

