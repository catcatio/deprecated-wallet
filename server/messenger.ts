exports.start = async app => {
  /* ----------  Web hooks  ---------- */

  require('./routes/webhooks')

  /* ----------  Errors  ---------- */

  app.use(function (err, req, res) {
    if (!res.locals) return

    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
  })

  // Messenger
  const ThreadSetup = require('./messenger-api-helpers/thread-setup')
  ThreadSetup.setGetStarted()
}
