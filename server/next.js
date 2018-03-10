export const start = async app => {
  const next = require('next')

  const dev = process.env.NODE_ENV !== 'production'
  const _next = next({ dev })
  const handle = _next.getRequestHandler()

  await _next.prepare()

  app.get('*', (req, res) => {
    return handle(req, res)
  })

  app.get('/a', (req, res) => {
    return _next.render(req, res, '/b', req.query)
  })

  app.get('/b', (req, res) => {
    return _next.render(req, res, '/a', req.query)
  })

  app.get('/posts/:id', (req, res) => {
    return _next.render(req, res, '/posts', { id: req.params.id })
  })
}
