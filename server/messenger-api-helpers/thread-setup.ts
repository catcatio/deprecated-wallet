/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

// ===== MESSENGER =============================================================
const messages = require('./messages')
const { callThreadAPI } = require('./api')

/**
 * setGetStarted - Sets the Get Started button for the application
 *
 * @returns {undefined}
 */
const setGetStarted = () => {
  callThreadAPI(messages.getStarted)
}

module.exports = { setGetStarted }