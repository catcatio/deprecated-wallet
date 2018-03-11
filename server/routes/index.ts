export const hook = (app, nextjs) => {
  app.get('/', (req, res) => nextjs.render(req, res, '/index'))
}