require('dotenv/config')

const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const _next = next({ dev })
const handle = _next.getRequestHandler()

_next.prepare().then(() => {
  const app = express()

  app.get('/a', (req, res) => {
    return _next.render(req, res, '/b', req.query)
  })

  app.get('/b', (req, res) => {
    return _next.render(req, res, '/a', req.query)
  })

  app.get('/posts/:id', (req, res) => {
    return _next.render(req, res, '/posts', { id: req.params.id })
  })

  app.get('*', (req, res) => {
    return handle(req, res)
  })

  app.listen(app.get('port'), err => {
    if (err) throw err
    console.log('Node app is running on port', app.get('port')) // eslint-disable-line
  })
})
