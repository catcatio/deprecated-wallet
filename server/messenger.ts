// ===== MESSENGER =============================================================

import ThreadSetup from './messenger-api-helpers/thread-setup';

// ===== ROUTES ================================================================

import webhooks from './routes/webhooks';
import users from './routes/users';

export default class Messenger {
  async start(app) {
    /* ----------  Web hooks  ---- ------ */

    app.use('/webhook', webhooks);

    /* ----------  Errors  ---------- */

    app.use(function (err, req, res, next) {
      if (!res.locals) return next()

      // set locals, only providing error in development
      res.locals.message = err.message
      res.locals.error = req.app.get('env') === 'development' ? err : {}

      // render the error page
      res.status(err.status || 500)
      res.send(err.message)
    })

    // Messenger
    ThreadSetup.setGetStarted()
  }
}  
